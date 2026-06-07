import LearningSection from "../components/LearningSection.jsx"
import { teluguCategories } from "../data/teluguLetters.js"

export default function Telugu() {
  return (
    <LearningSection
      language="telugu"
      title="Telugu"
      native="తెలుగు"
      emoji="🦚"
      categories={teluguCategories}
    />
  )
}
