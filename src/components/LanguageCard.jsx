import { Link } from "react-router-dom"
import "./LanguageCard.css"

export default function LanguageCard({ to, title, native, sample, color, emoji }) {
  return (
    <Link
      to={to}
      className="lang-card"
      style={{ "--card-color": color }}
    >
      <div className="lang-card-badge" aria-hidden="true">{emoji}</div>
      <div className="lang-card-sample" aria-hidden="true">{sample}</div>
      <h3 className="lang-card-title">{title}</h3>
      <p className="lang-card-native">{native}</p>
      <span className="lang-card-cta">Let&apos;s Learn →</span>
    </Link>
  )
}
