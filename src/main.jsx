import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

// Load playful, accessible Google fonts
const fontLink = document.createElement("link")
fontLink.rel = "stylesheet"
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&family=Noto+Sans+Telugu:wght@600;700;800&family=Noto+Sans+Devanagari:wght@600;700;800&display=swap"
document.head.appendChild(fontLink)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
