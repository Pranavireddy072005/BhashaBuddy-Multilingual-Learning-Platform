import { Link } from "react-router-dom"
import LanguageCard from "../components/LanguageCard.jsx"
import "./Home.css"

const languages = [
  { to: "/telugu", title: "Telugu", native: "తెలుగు", sample: "అ", color: "var(--rainbow-pink)", emoji: "🦚" },
  { to: "/hindi", title: "Hindi", native: "हिन्दी", sample: "अ", color: "var(--rainbow-orange)", emoji: "🐘" },
  { to: "/english", title: "English", native: "English", sample: "A", color: "var(--rainbow-blue)", emoji: "🦁" },
]

const features = [
  { icon: "✏️", title: "Trace & Write", text: "Practice letters with your finger or mouse." },
  { icon: "🔊", title: "Hear Sounds", text: "Tap to hear how each letter is pronounced." },
  { icon: "🎮", title: "Fun Quizzes", text: "Play games and earn stars and badges." },
  { icon: "📈", title: "Track Progress", text: "Watch your learning grow every day." },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-blobs" aria-hidden="true">
          <span className="blob b1">🌟</span>
          <span className="blob b2">🎈</span>
          <span className="blob b3">🦋</span>
          <span className="blob b4">🌸</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Bhasha Buddy <span className="hero-rainbow">🌈</span>
          </h1>
          <p className="hero-tag">
            Learn Telugu, Hindi & English the fun way! Trace letters, hear sounds, and play games.
          </p>
          <div className="hero-cta">
            <Link to="/telugu" className="btn btn-lg">🚀 Start Learning</Link>
            <Link to="/quiz" className="btn btn-lg btn-ghost">🎮 Play a Game</Link>
          </div>
        </div>

        <div className="hero-art">
          <img src="/images/hero-kids.png" alt="Happy children learning letters together" className="float" />
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">Pick a Language to Learn</h2>
        <p className="section-sub">Choose one and start your colorful adventure!</p>
        <div className="lang-grid">
          {languages.map((l, i) => (
            <div key={l.to} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <LanguageCard {...l} />
            </div>
          ))}
        </div>
      </section>

      <section className="page features">
        <h2 className="section-title">Why Kids Love It</h2>
        <p className="section-sub">Everything is playful, colorful, and easy.</p>
        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card card">
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
