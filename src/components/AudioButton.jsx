import { speak } from "../utils/speech.js"
import { useState } from "react"
import "./AudioButton.css"

export default function AudioButton({ text, language, label = "Hear it", size = "md" }) {
  const [playing, setPlaying] = useState(false)

  const handle = () => {
    setPlaying(true)
    speak(text, language)
    setTimeout(() => setPlaying(false), 900)
  }

  return (
    <button
      className={`audio-btn audio-${size} ${playing ? "is-playing" : ""}`}
      onClick={handle}
      aria-label={`${label}: ${text}`}
    >
      <span className="audio-icon" aria-hidden="true">🔊</span>
      <span className="audio-label">{label}</span>
    </button>
  )
}
