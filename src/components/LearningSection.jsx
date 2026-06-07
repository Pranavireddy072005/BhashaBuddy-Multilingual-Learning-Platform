import { useState, useMemo } from "react"
import LetterCard from "./LetterCard.jsx"
import TracingCanvas from "./TracingCanvas.jsx"
import ProgressBar from "./ProgressBar.jsx"
import { useApp } from "../context/AppContext.jsx"
import "./LearningSection.css"

export default function LearningSection({ language, title, native, emoji, categories }) {
  const { progress, markLearned, addTraced } = useApp()
  const [catId, setCatId] = useState(categories[0].id)
  const [index, setIndex] = useState(0)
  const [showTrace, setShowTrace] = useState(false)

  const category = useMemo(() => categories.find((c) => c.id === catId), [categories, catId])
  const items = category.data
  const item = items[index]
  const learnedKey = `${language}-${item.char}`
  const isLearned = !!progress.learned[learnedKey]

  // progress within current category
  const learnedInCat = items.filter((it) => progress.learned[`${language}-${it.char}`]).length

  const changeCategory = (id) => {
    setCatId(id)
    setIndex(0)
    setShowTrace(false)
  }

  const go = (dir) => {
    setShowTrace(false)
    setIndex((i) => {
      const next = (i + dir + items.length) % items.length
      return next
    })
  }

  // Mark as learned when viewed
  const handleLearned = () => markLearned(language, item.char)

  return (
    <div className="learn page" style={{ "--learn-color": category.color }}>
      <header className="learn-head">
        <h1 className="learn-title">
          <span aria-hidden="true">{emoji}</span> {title}
          <span className="learn-native">{native}</span>
        </h1>
        <p className="section-sub">Tap a category, then learn each letter step by step!</p>
      </header>

      <div className="learn-tabs" role="tablist" aria-label="Categories">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === catId}
            className={`learn-tab ${c.id === catId ? "active" : ""}`}
            style={{ "--tab-color": c.color }}
            onClick={() => changeCategory(c.id)}
          >
            <span className="learn-tab-title">{c.title}</span>
            <span className="learn-tab-native">{c.native}</span>
          </button>
        ))}
      </div>

      <div className="learn-progress card">
        <ProgressBar
          value={learnedInCat}
          max={items.length}
          label={`${category.title}: ${learnedInCat} of ${items.length} learned`}
          color={category.color}
        />
      </div>

      <div className="learn-body">
        <div className="learn-main">
          <LetterCard
            item={item}
            language={language}
            color={category.color}
            learned={isLearned}
            onTrace={() => setShowTrace((s) => !s)}
          />

          <div className="learn-nav">
            <button className="btn btn-ghost" onClick={() => go(-1)}>← Previous</button>
            <span className="learn-count">{index + 1} / {items.length}</span>
            <button className="btn" onClick={() => go(1)}>Next →</button>
          </div>

          <button
            className={`btn ${isLearned ? "btn-green" : "btn-accent"} learn-mark`}
            onClick={handleLearned}
            disabled={isLearned}
          >
            {isLearned ? "✓ Learned!" : "⭐ Mark as Learned"}
          </button>
        </div>

        {showTrace && (
          <div className="learn-trace card fade-up">
            <h3 className="learn-trace-title">Trace the letter {item.char}</h3>
            <TracingCanvas
              letter={item.char}
              color={category.color}
              onComplete={() => addTraced()}
            />
          </div>
        )}
      </div>
    </div>
  )
}
