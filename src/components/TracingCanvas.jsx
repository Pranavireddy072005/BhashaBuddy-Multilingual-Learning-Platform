import { useEffect, useRef, useState, useCallback } from "react"
import "./TracingCanvas.css"

export default function TracingCanvas({ letter = "A", color = "var(--rainbow-pink)", onComplete }) {
  const canvasRef = useRef(null)
  const guideRef = useRef(null)
  const drawing = useRef(false)
  const last = useRef(null)
  const [accuracy, setAccuracy] = useState(0)
  const [success, setSuccess] = useState(false)
  const guidePixels = useRef(0)
  const hitPixels = useRef(0)

  const SIZE = 320
  const STROKE = 26

  // Resolve a CSS variable color to a real color string
  const resolveColor = useCallback((c) => {
    if (c.startsWith("var(")) {
      const name = c.slice(4, -1).trim()
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#ff6b9d"
    }
    return c
  }, [])

  // Draw the faded guide letter on a hidden canvas to sample its pixels
  const drawGuide = useCallback(() => {
    const guide = guideRef.current
    if (!guide) return
    const gctx = guide.getContext("2d")
    gctx.clearRect(0, 0, SIZE, SIZE)
    gctx.fillStyle = "#000"
    gctx.textAlign = "center"
    gctx.textBaseline = "middle"
    gctx.font = `bold ${SIZE * 0.7}px "Baloo 2", "Noto Sans Telugu", "Noto Sans Devanagari", sans-serif`
    gctx.fillText(letter, SIZE / 2, SIZE / 2 + 10)

    // Count guide pixels
    const data = gctx.getImageData(0, 0, SIZE, SIZE).data
    let count = 0
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 30) count++
    }
    guidePixels.current = count
    hitPixels.current = 0
  }, [letter])

  // Reset everything
  const reset = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, SIZE, SIZE)
    setAccuracy(0)
    setSuccess(false)
    hitPixels.current = 0
  }, [])

  useEffect(() => {
    drawGuide()
    reset()
  }, [letter, drawGuide, reset])

  const getPos = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const point = e.touches ? e.touches[0] : e
    return {
      x: ((point.clientX - rect.left) / rect.width) * SIZE,
      y: ((point.clientY - rect.top) / rect.height) * SIZE,
    }
  }

  const checkHit = (x, y) => {
    const guide = guideRef.current
    if (!guide || guidePixels.current === 0) return
    const gctx = guide.getContext("2d")
    const r = STROKE / 2
    try {
      const sample = gctx.getImageData(Math.max(0, x - r), Math.max(0, y - r), STROKE, STROKE).data
      let onLetter = false
      for (let i = 3; i < sample.length; i += 4) {
        if (sample[i] > 30) { onLetter = true; break }
      }
      if (onLetter) {
        hitPixels.current += STROKE * 2
        const acc = Math.min(100, Math.round((hitPixels.current / guidePixels.current) * 100))
        setAccuracy(acc)
        if (acc >= 80 && !success) {
          setSuccess(true)
          onComplete && onComplete(acc)
        }
      }
    } catch (e) {
      // ignore sampling errors
    }
  }

  const start = (e) => {
    e.preventDefault()
    drawing.current = true
    last.current = getPos(e)
  }

  const move = (e) => {
    if (!drawing.current) return
    e.preventDefault()
    const ctx = canvasRef.current.getContext("2d")
    const pos = getPos(e)
    ctx.strokeStyle = resolveColor(color)
    ctx.lineWidth = STROKE
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.beginPath()
    ctx.moveTo(last.current.x, last.current.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    checkHit(pos.x, pos.y)
    last.current = pos
  }

  const end = () => {
    drawing.current = false
    last.current = null
  }

  const accLabel = accuracy >= 80 ? "Great!" : accuracy >= 40 ? "Keep going!" : "Trace the letter"

  return (
    <div className="trace">
      <div className="trace-stage">
        <span className="trace-ghost" style={{ color: resolveColor(color) }} aria-hidden="true">
          {letter}
        </span>
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="trace-canvas"
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
          aria-label={`Tracing area for the letter ${letter}`}
        />
        <canvas ref={guideRef} width={SIZE} height={SIZE} style={{ display: "none" }} />

        {success && (
          <div className="trace-success" role="status">
            <span className="trace-success-emoji pop-in">⭐</span>
            <span className="trace-success-text pop-in">Well done!</span>
            <span className="trace-confetti c1">🎉</span>
            <span className="trace-confetti c2">✨</span>
            <span className="trace-confetti c3">🎊</span>
          </div>
        )}
      </div>

      <div className="trace-meter">
        <div className="trace-meter-head">
          <span>{accLabel}</span>
          <span>{accuracy}%</span>
        </div>
        <div className="trace-meter-track">
          <div
            className="trace-meter-fill"
            style={{ width: `${accuracy}%`, background: resolveColor(color) }}
          />
        </div>
      </div>

      <div className="trace-actions">
        <button className="btn btn-ghost" onClick={reset}>🧹 Clear</button>
        <button className="btn btn-accent" onClick={() => { reset(); drawGuide() }}>🔄 Restart</button>
      </div>
    </div>
  )
}
