import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext(null)

const STORAGE_KEY = "bhasha-buddy-progress"
const THEME_KEY = "bhasha-buddy-theme"

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    // ignore
  }
  return {
    learned: {}, // { "telugu-అ": true }
    quizScores: [], // [{ score, total, date }]
    tracedCount: 0,
    stars: 0,
    badges: [],
    lastVisit: null,
    streak: 0,
  }
}

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light")
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  // Streak handling on mount
  useEffect(() => {
    setProgress((p) => {
      const today = todayStr()
      if (p.lastVisit === today) return p
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
      const streak = p.lastVisit === yesterday ? (p.streak || 0) + 1 : 1
      return { ...p, lastVisit: today, streak }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  const markLearned = (lang, char) => {
    setProgress((p) => {
      const key = `${lang}-${char}`
      if (p.learned[key]) return p
      return { ...p, learned: { ...p.learned, [key]: true }, stars: p.stars + 1 }
    })
  }

  const addQuizScore = (score, total) => {
    setProgress((p) => {
      const badges = [...p.badges]
      if (score === total && !badges.includes("Perfect Quiz")) badges.push("Perfect Quiz")
      if (p.quizScores.length + 1 >= 5 && !badges.includes("Quiz Master")) badges.push("Quiz Master")
      return {
        ...p,
        quizScores: [...p.quizScores, { score, total, date: todayStr() }],
        stars: p.stars + score,
        badges,
      }
    })
  }

  const addTraced = () => {
    setProgress((p) => {
      const tracedCount = p.tracedCount + 1
      const badges = [...p.badges]
      if (tracedCount >= 10 && !badges.includes("Tracing Pro")) badges.push("Tracing Pro")
      return { ...p, tracedCount, stars: p.stars + 1, badges }
    })
  }

  const resetProgress = () => setProgress(loadProgress())

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, progress, markLearned, addQuizScore, addTraced, resetProgress }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useApp must be used within AppProvider")
  return ctx
}
