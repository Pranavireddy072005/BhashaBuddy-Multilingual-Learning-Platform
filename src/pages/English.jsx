import LearningSection from "../components/LearningSection.jsx"
import { englishCategories } from "../data/englishLetters.js"

export default function English() {
  return (
    <LearningSection
      language="english"
      title="English"
      native="English"
      emoji="🦁"
      categories={englishCategories}
    />
  )
}
