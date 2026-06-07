// Telugu letters data: vowels (అచ్చులు), consonants (హల్లులు), numbers (౦-౯)

export const teluguVowels = [
  { char: "అ", translit: "a", word: "అమ్మ", wordMeaning: "Mother", emoji: "👩" },
  { char: "ఆ", translit: "aa", word: "ఆవు", wordMeaning: "Cow", emoji: "🐄" },
  { char: "ఇ", translit: "i", word: "ఇల్లు", wordMeaning: "House", emoji: "🏠" },
  { char: "ఈ", translit: "ee", word: "ఈగ", wordMeaning: "Fly", emoji: "🪰" },
  { char: "ఉ", translit: "u", word: "ఉడుత", wordMeaning: "Squirrel", emoji: "🐿️" },
  { char: "ఊ", translit: "oo", word: "ఊయల", wordMeaning: "Swing", emoji: "🛝" },
  { char: "ఋ", translit: "ru", word: "ఋషి", wordMeaning: "Sage", emoji: "🧘" },
  { char: "ఎ", translit: "e", word: "ఎలుక", wordMeaning: "Mouse", emoji: "🐁" },
  { char: "ఏ", translit: "ae", word: "ఏనుగు", wordMeaning: "Elephant", emoji: "🐘" },
  { char: "ఐ", translit: "ai", word: "ఐదు", wordMeaning: "Five", emoji: "✋" },
  { char: "ఒ", translit: "o", word: "ఒంటె", wordMeaning: "Camel", emoji: "🐪" },
  { char: "ఓ", translit: "oo", word: "ఓడ", wordMeaning: "Ship", emoji: "🚢" },
  { char: "ఔ", translit: "au", word: "ఔషధం", wordMeaning: "Medicine", emoji: "💊" },
]

export const teluguConsonants = [
  { char: "క", translit: "ka", word: "కలం", wordMeaning: "Pen", emoji: "🖊️" },
  { char: "ఖ", translit: "kha", word: "ఖడ్గం", wordMeaning: "Sword", emoji: "⚔️" },
  { char: "గ", translit: "ga", word: "గడియారం", wordMeaning: "Clock", emoji: "⏰" },
  { char: "ఘ", translit: "gha", word: "ఘటం", wordMeaning: "Pot", emoji: "🏺" },
  { char: "చ", translit: "cha", word: "చేప", wordMeaning: "Fish", emoji: "🐟" },
  { char: "జ", translit: "ja", word: "జింక", wordMeaning: "Deer", emoji: "🦌" },
  { char: "ట", translit: "ta", word: "టమాటా", wordMeaning: "Tomato", emoji: "🍅" },
  { char: "డ", translit: "da", word: "డబ్బా", wordMeaning: "Box", emoji: "📦" },
  { char: "త", translit: "tha", word: "తాబేలు", wordMeaning: "Tortoise", emoji: "🐢" },
  { char: "ద", translit: "da", word: "దీపం", wordMeaning: "Lamp", emoji: "🪔" },
  { char: "న", translit: "na", word: "నక్క", wordMeaning: "Fox", emoji: "🦊" },
  { char: "ప", translit: "pa", word: "పండు", wordMeaning: "Fruit", emoji: "🍎" },
  { char: "బ", translit: "ba", word: "బంతి", wordMeaning: "Ball", emoji: "⚽" },
  { char: "మ", translit: "ma", word: "మామిడి", wordMeaning: "Mango", emoji: "🥭" },
  { char: "య", translit: "ya", word: "యానాది", wordMeaning: "Traveller", emoji: "🚶" },
  { char: "ర", translit: "ra", word: "రథం", wordMeaning: "Chariot", emoji: "🛺" },
  { char: "ల", translit: "la", word: "లడ్డు", wordMeaning: "Sweet", emoji: "🍡" },
  { char: "వ", translit: "va", word: "వాన", wordMeaning: "Rain", emoji: "🌧️" },
  { char: "శ", translit: "sha", word: "శంఖం", wordMeaning: "Conch", emoji: "🐚" },
  { char: "స", translit: "sa", word: "సూర్యుడు", wordMeaning: "Sun", emoji: "☀️" },
  { char: "హ", translit: "ha", word: "హంస", wordMeaning: "Swan", emoji: "🦢" },
]

export const teluguNumbers = [
  { char: "౦", translit: "sunna", word: "సున్నా", wordMeaning: "Zero", emoji: "0️⃣" },
  { char: "౧", translit: "okati", word: "ఒకటి", wordMeaning: "One", emoji: "1️⃣" },
  { char: "౨", translit: "rendu", word: "రెండు", wordMeaning: "Two", emoji: "2️⃣" },
  { char: "౩", translit: "mudu", word: "మూడు", wordMeaning: "Three", emoji: "3️⃣" },
  { char: "౪", translit: "nalugu", word: "నాలుగు", wordMeaning: "Four", emoji: "4️⃣" },
  { char: "౫", translit: "aidu", word: "ఐదు", wordMeaning: "Five", emoji: "5️⃣" },
  { char: "౬", translit: "aaru", word: "ఆరు", wordMeaning: "Six", emoji: "6️⃣" },
  { char: "౭", translit: "edu", word: "ఏడు", wordMeaning: "Seven", emoji: "7️⃣" },
  { char: "౮", translit: "enimidi", word: "ఎనిమిది", wordMeaning: "Eight", emoji: "8️⃣" },
  { char: "౯", translit: "tommidi", word: "తొమ్మిది", wordMeaning: "Nine", emoji: "9️⃣" },
]

export const teluguCategories = [
  { id: "vowels", title: "Vowels", native: "అచ్చులు", color: "var(--rainbow-pink)", data: teluguVowels },
  { id: "consonants", title: "Consonants", native: "హల్లులు", color: "var(--rainbow-blue)", data: teluguConsonants },
  { id: "numbers", title: "Numbers", native: "౦ - ౯", color: "var(--rainbow-green)", data: teluguNumbers },
]
