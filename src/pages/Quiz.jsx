import { useState, useMemo, useCallback } from "react"
import AudioButton from "../components/AudioButton.jsx"
import { useApp } from "../context/AppContext.jsx"
import { speak } from "../utils/speech.js"
import { teluguCategories } from "../data/teluguLetters.js"
import { hindiCategories } from "../data/hindiLetters.js"
import { englishCategories } from "../data/englishLetters.js"
import "./Quiz.css"

const POOLS = {
  telugu: [...teluguCategories[0].data, ...teluguCategories[1].data],
  hindi: [...hindiCategories[0].data, ...hindiCategories[1].data],
  english: [...englishCategories[0].data, ...englishCategories[1].data],
}

const TOTAL = 6

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build a single question of a random type
function buildQuestion(pool) {
  const types = ["picture", "audio", "letter"]
  const type = types[Math.floor(Math.random() * types.length)]
  const correct = pool[Math.floor(Math.random() * pool.length)]
  const distractors = shuffle(pool.filter((p) => p.char !== correct.char)).slice(0, 3)
  const options = shuffle([correct, ...distractors])
  return { type, correct, options }
}

export default function Quiz() {
  const { addQuizScore } = useApp()
  const [lang, setLang] = useState("english")
  const [stage, setStage] = useState("setup") // setup | play | result
  const [questions, setQuestions] = useState([])
  const [qIndex, setQIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)
  const [feedback, setFeedback] = useState(null)

  const pool = POOLS[lang]

  const startGame = useCallback(() => {
    const qs = Array.from({ length: TOTAL }, () => buildQuestion(pool))
    setQuestions(qs)
    setQIndex(0)
    setScore(0)
    setPicked(null)
    setFeedback(null)
    setStage("play")
  }, [pool])

  const q = questions[qIndex]

  const choose = (opt) => {
    if (picked) return
    setPicked(opt.char)
    const correct = opt.char === q.correct.char
    if (correct) {
      setScore((s) => s + 1)
      setFeedback("correct")
    } else {
      setFeedback("wrong")
    }
    setTimeout(() => {
      if (qIndex + 1 >= TOTAL) {
        addQuizScore(correct ? score + 1 : score, TOTAL)
        setStage("result")
      } else {
        setQIndex((i) => i + 1)
        setPicked(null)
        setFeedback(null)
      }
    }, 1100)
  }

  const prompt = useMemo(() => {
    if (!q) return null
    if (q.type === "picture") {
      return {
        title: "Which letter does this picture start with?",
        visual: <span className="quiz-emoji" aria-label={q.correct.wordMeaning}>{q.correct.emoji}</span>,
        renderOption: (o) => <span className="quiz-opt-char">{o.char}</span>,
      }
    }
    if (q.type === "audio") {
      return {
        title: "Listen and pick the correct letter",
        visual: (
          <button className="quiz-audio" onClick={() => speak(q.correct.char, lang)} aria-label="Play sound">
            🔊
          </button>
        ),
        renderOption: (o) => <span className="quiz-opt-char">{o.char}</span>,
      }
    }
    return {
      title: "Which picture matches this letter?",
      visual: <span className="quiz-big-letter">{q.correct.char}</span>,
      renderOption: (o) => <span className="quiz-opt-emoji" aria-label={o.wordMeaning}>{o.emoji}</span>,
    }
  }, [q, lang])

  if (stage === "setup") {
    return (
      <div className="page quiz-page">
        <h1 className="section-title">Quiz Time! 🎮</h1>
        <p className="section-sub">Pick a language and play fun games to earn stars and badges.</p>
        <div className="quiz-setup card">
          <h3>Choose a language</h3>
          <div className="quiz-langs">
            {Object.keys(POOLS).map((key) => (
              <button
                key={key}
                className={`btn ${lang === key ? "" : "btn-ghost"}`}
                onClick={() => setLang(key)}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <ul className="quiz-modes">
            <li>🖼️ Match letter with picture</li>
            <li>🔊 Identify letter from audio</li>
            <li>🔤 Multiple choice questions</li>
          </ul>
          <button className="btn btn-lg btn-green" onClick={startGame}>▶️ Start Quiz</button>
        </div>
      </div>
    )
  }

  if (stage === "result") {
    const perfect = score === TOTAL
    const good = score >= TOTAL / 2
    return (
      <div className="page quiz-page">
        <div className="quiz-result card pop-in">
          <span className="quiz-result-emoji">{perfect ? "🏆" : good ? "🌟" : "💪"}</span>
          <h2>{perfect ? "Perfect Score!" : good ? "Great Job!" : "Good Try!"}</h2>
          <p className="quiz-result-score">You got <strong>{score}</strong> of {TOTAL} right</p>
          <div className="quiz-stars" aria-label={`${score} stars earned`}>
            {Array.from({ length: TOTAL }).map((_, i) => (
              <span key={i} className={i < score ? "star on" : "star"}>⭐</span>
            ))}
          </div>
          <div className="quiz-result-actions">
            <button className="btn btn-green" onClick={startGame}>🔄 Play Again</button>
            <button className="btn btn-ghost" onClick={() => setStage("setup")}>🏠 Change Language</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page quiz-page">
      <div className="quiz-topbar">
        <span className="quiz-progress-chip">Question {qIndex + 1} / {TOTAL}</span>
        <span className="quiz-score-chip">⭐ {score}</span>
      </div>

      <div className="quiz-card card">
        <h2 className="quiz-question">{prompt.title}</h2>
        <div className="quiz-visual">{prompt.visual}</div>

        <div className="quiz-options">
          {q.options.map((o) => {
            const isPicked = picked === o.char
            const isCorrect = o.char === q.correct.char
            let cls = "quiz-option"
            if (picked) {
              if (isCorrect) cls += " correct"
              else if (isPicked) cls += " wrong"
              else cls += " dim"
            }
            return (
              <button key={o.char + o.word} className={cls} onClick={() => choose(o)} disabled={!!picked}>
                {prompt.renderOption(o)}
              </button>
            )
          })}
        </div>

        {feedback && (
          <div className={`quiz-feedback ${feedback}`} role="status">
            {feedback === "correct" ? "🎉 Correct!" : `Oops! It was ${q.correct.char}`}
          </div>
        )}
      </div>
    </div>
  )
}
