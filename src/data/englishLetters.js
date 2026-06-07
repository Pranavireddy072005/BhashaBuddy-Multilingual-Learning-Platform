// English letters data: capital letters, small letters, numbers

const words = [
  { word: "Apple", emoji: "🍎" },
  { word: "Ball", emoji: "⚽" },
  { word: "Cat", emoji: "🐱" },
  { word: "Dog", emoji: "🐶" },
  { word: "Elephant", emoji: "🐘" },
  { word: "Fish", emoji: "🐟" },
  { word: "Goat", emoji: "🐐" },
  { word: "Hat", emoji: "🎩" },
  { word: "Ice", emoji: "🧊" },
  { word: "Jug", emoji: "🫙" },
  { word: "Kite", emoji: "🪁" },
  { word: "Lion", emoji: "🦁" },
  { word: "Mango", emoji: "🥭" },
  { word: "Nest", emoji: "🪺" },
  { word: "Orange", emoji: "🍊" },
  { word: "Parrot", emoji: "🦜" },
  { word: "Queen", emoji: "👸" },
  { word: "Rabbit", emoji: "🐰" },
  { word: "Sun", emoji: "☀️" },
  { word: "Tiger", emoji: "🐯" },
  { word: "Umbrella", emoji: "☂️" },
  { word: "Van", emoji: "🚐" },
  { word: "Watch", emoji: "⌚" },
  { word: "Xylophone", emoji: "🎶" },
  { word: "Yak", emoji: "🐃" },
  { word: "Zebra", emoji: "🦓" },
]

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export const englishCapitals = alphabet.map((char, i) => ({
  char,
  translit: char.toLowerCase(),
  word: words[i].word,
  wordMeaning: words[i].word,
  emoji: words[i].emoji,
}))

export const englishSmall = alphabet.map((char, i) => ({
  char: char.toLowerCase(),
  translit: char.toLowerCase(),
  word: words[i].word,
  wordMeaning: words[i].word,
  emoji: words[i].emoji,
}))

const numberWords = [
  { word: "Zero", emoji: "0️⃣" },
  { word: "One", emoji: "1️⃣" },
  { word: "Two", emoji: "2️⃣" },
  { word: "Three", emoji: "3️⃣" },
  { word: "Four", emoji: "4️⃣" },
  { word: "Five", emoji: "5️⃣" },
  { word: "Six", emoji: "6️⃣" },
  { word: "Seven", emoji: "7️⃣" },
  { word: "Eight", emoji: "8️⃣" },
  { word: "Nine", emoji: "9️⃣" },
]

export const englishNumbers = numberWords.map((n, i) => ({
  char: String(i),
  translit: n.word.toLowerCase(),
  word: n.word,
  wordMeaning: n.word,
  emoji: n.emoji,
}))

export const englishCategories = [
  { id: "capitals", title: "Capital Letters", native: "A B C", color: "var(--rainbow-blue)", data: englishCapitals },
  { id: "small", title: "Small Letters", native: "a b c", color: "var(--rainbow-pink)", data: englishSmall },
  { id: "numbers", title: "Numbers", native: "0 - 9", color: "var(--rainbow-green)", data: englishNumbers },
]
