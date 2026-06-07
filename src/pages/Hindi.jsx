import LearningSection from "../components/LearningSection.jsx"
import { hindiCategories } from "../data/hindiLetters.js"

export default function Hindi() {
  return (
    <LearningSection
      language="hindi"
      title="Hindi"
      native="हिन्दी"
      emoji="🐘"
      categories={hindiCategories}
    />
  )
}
