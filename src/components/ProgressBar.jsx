import "./ProgressBar.css"

export default function ProgressBar({ value = 0, max = 100, label, color = "var(--good)" }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0
  return (
    <div className="progress-wrap">
      {label && (
        <div className="progress-head">
          <span>{label}</span>
          <span className="progress-pct">{pct}%</span>
        </div>
      )}
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "progress"}
      >
        <div className="progress-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}
