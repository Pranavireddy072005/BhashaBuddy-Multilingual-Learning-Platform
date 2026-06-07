import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import { useApp } from "../context/AppContext.jsx"
import "./Navbar.css"

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/telugu", label: "Telugu" },
  { to: "/hindi", label: "Hindi" },
  { to: "/english", label: "English" },
  { to: "/quiz", label: "Quiz" },
  { to: "/dashboard", label: "Progress" },
]

export default function Navbar() {
  const { theme, toggleTheme } = useApp()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="navbar-logo-mark" aria-hidden="true">🌈</span>
          <span>Bhasha Buddy</span>
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <button
            className="navbar-theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  )
}
