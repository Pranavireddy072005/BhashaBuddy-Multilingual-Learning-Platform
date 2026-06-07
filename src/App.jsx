import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Telugu from "./pages/Telugu.jsx"
import Hindi from "./pages/Hindi.jsx"
import English from "./pages/English.jsx"
import Tracing from "./pages/Tracing.jsx"
import Quiz from "./pages/Quiz.jsx"
import Dashboard from "./pages/Dashboard.jsx"

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telugu" element={<Telugu />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/english" element={<English />} />
          <Route path="/tracing" element={<Tracing />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </AppProvider>
  )
}
