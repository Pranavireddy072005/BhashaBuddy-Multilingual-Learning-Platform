import AudioButton from "./AudioButton.jsx"
import "./LetterCard.css"

export default function LetterCard({ item, language, color = "var(--rainbow-pink)", learned, onTrace }) {
  return (
    <div className="letter-card card" style={{ "--lc-color": color }}>
      {learned && <span className="letter-card-check" aria-label="Learned">✓</span>}

      <div className="letter-card-big" aria-hidden="true">{item.char}</div>
      <div className="letter-card-translit">{item.translit}</div>

      <AudioButton text={item.char} language={language} label="Say it" size="lg" />

      <div className="letter-card-example">
        <span className="letter-card-emoji" aria-hidden="true">{item.emoji}</span>
        <div className="letter-card-word">
          <strong>{item.word}</strong>
          <small>{item.wordMeaning}</small>
        </div>
        <AudioButton text={item.word} language={language} label="Word" size="sm" />
      </div>

      {onTrace && (
        <button className="btn btn-green letter-card-trace" onClick={onTrace}>
          ✏️ Trace this
        </button>
      )}
    </div>
  )
}
