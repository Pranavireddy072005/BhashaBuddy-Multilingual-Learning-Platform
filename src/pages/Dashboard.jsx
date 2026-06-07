import { Link } from "react-router-dom"
import ProgressBar from "../components/ProgressBar.jsx"
import { useApp } from "../context/AppContext.jsx"
import { teluguCategories } from "../data/teluguLetters.js"
import { hindiCategories } from "../data/hindiLetters.js"
import { englishCategories } from "../data/englishLetters.js"
import "./Dashboard.css"

const ALL_BADGES = [
  { id: "Perfect Quiz", icon: "🏆", label: "Perfect Quiz" },
  { id: "Quiz Master", icon: "🎯", label: "Quiz Master" },
  { id: "Tracing Pro", icon: "✏️", label: "Tracing Pro" },
]

function countLetters(categories, lang, learned) {
  const all = categories.flatMap((c) => c.data)
  const done = all.filter((it) => learned[`${lang}-${it.char}`]).length
  return { done, total: all.length }
}

export default function Dashboard() {
  const { progress, resetProgress } = useApp()

  const telugu = countLetters(teluguCategories, "telugu", progress.learned)
  const hindi = countLetters(hindiCategories, "hindi", progress.learned)
  const english = countLetters(englishCategories, "english", progress.learned)

  const totalLetters = telugu.total + hindi.total + english.total
  const learnedLetters = telugu.done + hindi.done + english.done

  const lastQuiz = progress.quizScores[progress.quizScores.length - 1]
  const bestQuiz = progress.quizScores.reduce(
    (best, q) => (q.score / q.total > best ? q.score / q.total : best),
    0,
  )

  const langRows = [
    { name: "Telugu", emoji: "🦚", color: "var(--rainbow-pink)", ...telugu, to: "/telugu" },
    { name: "Hindi", emoji: "🐘", color: "var(--rainbow-orange)", ...hindi, to: "/hindi" },
    { name: "English", emoji: "🦁", color: "var(--rainbow-blue)", ...english, to: "/english" },
  ]

  return (
    <div className="page dash">
      <h1 className="section-title">My Progress 📈</h1>
      <p className="section-sub">Look how much you have learned. Keep it up, superstar!</p>

      <div className="dash-stats">
        <div className="stat card" style={{ "--s": "var(--rainbow-yellow)" }}>
          <span className="stat-icon">⭐</span>
          <span className="stat-num">{progress.stars}</span>
          <span className="stat-label">Stars Earned</span>
        </div>
        <div className="stat card" style={{ "--s": "var(--rainbow-green)" }}>
          <span className="stat-icon">🔤</span>
          <span className="stat-num">{learnedLetters}</span>
          <span className="stat-label">Letters Learned</span>
        </div>
        <div className="stat card" style={{ "--s": "var(--rainbow-blue)" }}>
          <span className="stat-icon">✏️</span>
          <span className="stat-num">{progress.tracedCount}</span>
          <span className="stat-label">Letters Traced</span>
        </div>
        <div className="stat card" style={{ "--s": "var(--rainbow-pink)" }}>
          <span className="stat-icon">🔥</span>
          <span className="stat-num">{progress.streak}</span>
          <span className="stat-label">Day Streak</span>
        </div>
      </div>

      <div className="dash-grid">
        <section className="card dash-panel">
          <h2 className="dash-panel-title">Letters by Language</h2>
          <div className="dash-langs">
            {langRows.map((l) => (
              <div key={l.name} className="dash-lang">
                <div className="dash-lang-head">
                  <span><span aria-hidden="true">{l.emoji}</span> {l.name}</span>
                  <Link to={l.to} className="dash-lang-link">Continue →</Link>
                </div>
                <ProgressBar value={l.done} max={l.total} color={l.color} />
              </div>
            ))}
          </div>
          <div className="dash-overall">
            <ProgressBar
              value={learnedLetters}
              max={totalLetters}
              label="Overall completion"
              color="var(--good)"
            />
          </div>
        </section>

        <section className="card dash-panel">
          <h2 className="dash-panel-title">Quiz Scores</h2>
          {progress.quizScores.length === 0 ? (
            <p className="dash-empty">No quizzes played yet. <Link to="/quiz">Play your first quiz!</Link></p>
          ) : (
            <>
              <div className="dash-quiz-stats">
                <div>
                  <span className="dash-quiz-num">{progress.quizScores.length}</span>
                  <span className="dash-quiz-label">Played</span>
                </div>
                <div>
                  <span className="dash-quiz-num">{lastQuiz ? `${lastQuiz.score}/${lastQuiz.total}` : "—"}</span>
                  <span className="dash-quiz-label">Last Score</span>
                </div>
                <div>
                  <span className="dash-quiz-num">{Math.round(bestQuiz * 100)}%</span>
                  <span className="dash-quiz-label">Best</span>
                </div>
              </div>
              <Link to="/quiz" className="btn btn-green dash-quiz-btn">🎮 Play Again</Link>
            </>
          )}
        </section>

        <section className="card dash-panel dash-badges-panel">
          <h2 className="dash-panel-title">Badges</h2>
          <div className="dash-badges">
            {ALL_BADGES.map((b) => {
              const earned = progress.badges.includes(b.id)
              return (
                <div key={b.id} className={`dash-badge ${earned ? "earned" : ""}`}>
                  <span className="dash-badge-icon">{b.icon}</span>
                  <span className="dash-badge-label">{b.label}</span>
                  {!earned && <span className="dash-badge-lock">🔒</span>}
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <button className="btn btn-ghost dash-reset" onClick={resetProgress}>
        🗑️ Reset Progress
      </button>
    </div>
  )
}
