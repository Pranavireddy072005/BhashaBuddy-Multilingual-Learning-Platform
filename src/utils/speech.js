// Pronunciation using the browser's built-in Web Speech API.
// Maps app languages to BCP-47 voice locales.

const LANG_CODES = {
  telugu: "te-IN",
  hindi: "hi-IN",
  english: "en-US",
}

export function speak(text, language = "english") {
  if (typeof window === "undefined" || !window.speechSynthesis) return false

  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = LANG_CODES[language] || "en-US"
  utter.rate = 0.75
  utter.pitch = 1.15

  // Try to pick a matching voice if one is installed
  const voices = window.speechSynthesis.getVoices()
  const match = voices.find((v) => v.lang === utter.lang) || voices.find((v) => v.lang.startsWith(utter.lang.split("-")[0]))
  if (match) utter.voice = match

  window.speechSynthesis.speak(utter)
  return true
}
