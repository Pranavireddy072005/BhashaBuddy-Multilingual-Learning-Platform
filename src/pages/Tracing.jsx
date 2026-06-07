import { useState } from "react"
import TracingCanvas from "../components/TracingCanvas.jsx"
import AudioButton from "../components/AudioButton.jsx"
import { useApp } from "../context/AppContext.jsx"
import { teluguCategories } from "../data/teluguLetters.js"
import { hindiCategories } from "../data/hindiLetters.js"
import { englishCategories } from "../data/englishLetters.js"
import "./Tracing.css"

const SETS = {
  telugu: { label: "Telugu", color: "var(--rainbow-pink)", items: teluguCategories[0].data },
  hindi: { label: "Hindi", color: "var(--rainbow-orange)", items: hindiCategories[0].data },
  english: { label: "English", color: "var(--rainbow-blue)", items: englishCategories[0].data },
}

export default function Tracing() {
  const { addTraced } = useApp()
  const [lang, setLang] = useState("english")
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(0)

  const set = SETS[lang]
  const item = set.items[index]

  const pick = (l) => { setLang(l); setIndex(0) }
  const next = () => setIndex((i) => (i + 1) % set.items.length)
  const prev = () => setIndex((i) => (i - 1 + set.items.length) % set.items.length)

  return (
    <div className="page tracing-page" style={{ "--tp-color": set.color }}>
      <h1 className="section-title">Tracing Studio ✏️</h1>
      <p className="section-sub">Trace the faded letter with your finger or mouse. Get above 80% to win a star!</p>

      <div className="tracing-langs">
        {Object.entries(SETS).map(([key, s]) => (
          <button
            key={key}
            className={`btn ${lang === key ? "" : "btn-ghost"}`}
            style={lang === key ? { background: s.color } : undefined}
            onClick={() => pick(key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="tracing-stage card">
        <div className="tracing-info">
          <span className="tracing-big" style={{ color: set.color }} aria-hidden="true">{item.char}</span>
          <AudioButton text={item.char} language={lang} label="Hear it" />
          <div className="tracing-nav">
            <button className="btn btn-ghost" onClick={prev}>←</button>
            <span className="learn-count">{index + 1} / {set.items.length}</span>
            <button className="btn btn-ghost" onClick={next}>→</button>
          </div>
          <p className="tracing-done">Letters traced today: <strong>{done}</strong></p>
        </div>

        <TracingCanvas
          letter={item.char}
          color={set.color}
          onComplete={() => { addTraced(); setDone((d) => d + 1) }}
        />
      </div>
    </div>
  )
}
