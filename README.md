# 🌈 Bhasha Buddy

A fun, interactive language learning app for kids to learn **Telugu**, **Hindi**, and **English** letters through tracing, audio pronunciation, and gamified quizzes.

**Bhasha** (भाषा / భాష) means "language" in Indian languages. **Buddy** is your friendly companion on this learning journey!

---

## ✨ Features

### 🎯 Core Learning Features
- **Letter Tracing Studio** (`/tracing`) - Trace faded letters with finger or mouse to practice writing
- **Audio Pronunciation** - Click any letter to hear its pronunciation using Web Speech API
- **Language Support** - Learn Telugu (తెలుగు), Hindi (हिन्दी), and English letters
- **Interactive Word Association** - See words and emojis that start with each letter

### 🎮 Gamification
- **Quiz Games** (`/quiz`) - Test your knowledge with fun multiple-choice quizzes
- **Star System** - Earn stars for successful letter tracing (80%+ accuracy required)
- **Badges** - Unlock achievements:
  - 🏆 Perfect Quiz
  - 🎯 Quiz Master
  - ✏️ Tracing Pro
- **Daily Streaks** 🔥 - Build consistency with day streak tracking
- **Progress Dashboard** (`/dashboard`) - Track total letters learned, quiz scores, and achievements

### 📊 Progress Tracking
- Persistent progress storage using browser localStorage
- Overall completion percentage
- Per-language letter mastery tracking
- Quiz score history and performance stats
- Daily visit streak counter

### 🌐 Multi-Language Support
- **Telugu Alphabet** - అ, ఆ, ఇ, etc. (vowels and consonants)
- **Hindi Alphabet** - अ, आ, इ, etc. (Devanagari script)
- **English Alphabet** - A-Z with lowercase support

### 🎨 User Experience
- Colorful, child-friendly interface with rainbow color scheme
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Dark/Light theme toggle
- Beautiful decorative emoji "blobs" on landing page
- Playful Google fonts (Baloo 2, Nunito, Noto Sans)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI component framework |
| **React Router v6** | Client-side routing |
| **Vite** | Fast bundler and dev server |
| **Web Speech API** | Audio pronunciation synthesis |
| **Canvas API** | Letter tracing drawing |
| **localStorage** | Progress persistence |
| **CSS3** | Styling with CSS variables and animations |

---

## 📁 Project Structure

```
bhasha-buddy-app/
├── src/
│   ├── App.jsx                          # Main app component with routing
│   ├── main.jsx                         # Entry point with font loading
│   ├── index.css                        # Global styles
│   │
│   ├── pages/                           # Page components
│   │   ├── Home.jsx                     # Landing page with language cards
│   │   ├── English.jsx                  # English learning page
│   │   ├── Hindi.jsx                    # Hindi learning page
│   │   ├── Telugu.jsx                   # Telugu learning page
│   │   ├── Tracing.jsx                  # Letter tracing studio
│   │   ├── Quiz.jsx                     # Quiz game page
│   │   ├── Dashboard.jsx                # Progress dashboard
│   │   └── *.css                        # Page-specific styles
│   │
│   ├── components/                      # Reusable components
│   │   ├── Navbar.jsx                   # Navigation bar
│   │   ├── LanguageCard.jsx             # Language selection card
│   │   ├── LetterCard.jsx               # Individual letter display
│   │   ├── AudioButton.jsx              # Speech synthesis button
│   │   ├── LearningSection.jsx          # Letter grid section
│   │   ├── ProgressBar.jsx              # Progress visualization
│   │   ├── TracingCanvas.jsx            # Drawing canvas for tracing
│   │   └── *.css                        # Component-specific styles
│   │
│   ├── context/
│   │   └── AppContext.jsx               # Global state management
│   │                                    # - Progress tracking
│   │                                    # - Theme management
│   │                                    # - localStorage sync
│   │
│   ├── data/                            # Letter and word data
│   │   ├── englishLetters.js            # English alphabet data
│   │   ├── hindiLetters.js              # Hindi alphabet data
│   │   └── teluguLetters.js             # Telugu alphabet data
│   │
│   └── utils/
│       └── speech.js                    # Web Speech API wrapper
│
├── public/                              # Static assets
├── index.html                           # HTML entry point
├── package.json                         # Dependencies
├── pnpm-lock.yaml                       # Lock file
├── vite.config.js                       # Vite configuration
└── README.md                            # This file
```

---

## 🎓 How It Works

### Landing Page (`/`)
- Welcoming hero section with call-to-action buttons
- Three language cards for quick selection
- Feature highlights showing why kids will love the app

### Language Pages (`/english`, `/hindi`, `/telugu`)
- Organized letter display in categories
- Each letter shows:
  - Letter character
  - Associated words and emojis
  - Audio pronunciation button
  - Mark as "learned" status

### Tracing Studio (`/tracing`)
- Canvas-based letter tracing practice
- Faded letter guides with adjustable opacity
- Real-time accuracy feedback (score ≥80% to earn ⭐)
- Navigation between letters with prev/next buttons
- Success celebration animations

### Quiz Games (`/quiz`)
- Multiple-choice questions about letters
- Random letter selection
- Score tracking and streak maintenance
- Immediate feedback on answers
- Leaderboard of past quiz scores

### Dashboard (`/dashboard`)
- Visual progress for each language
- Total letters learned counter
- Stars earned display
- Quiz performance statistics
- Daily visit streak tracker
- Badges earned showcase
- Reset progress option

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16+) and **pnpm** (or npm/yarn)
- Modern web browser with Web Speech API support

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd bhasha-buddy-app

# Install dependencies
pnpm install
# or: npm install
```

### Development

```bash
# Start dev server
pnpm dev
# or: npm run dev

# Server runs at http://localhost:5173
```

### Production Build

```bash
# Build for production
pnpm build
# or: npm run build

# Preview production build locally
pnpm preview
# or: npm run preview

# Output: dist/ folder ready for deployment
```

---

## 🎮 Usage

### For Kids
1. **Start at Home** - Pick your favorite language from the colorful cards
2. **Learn Letters** - See all letters with pronunciation and word examples
3. **Practice Writing** - Go to Tracing Studio to practice letter shapes
4. **Play Games** - Challenge yourself with quizzes and earn stars
5. **Track Progress** - Visit Dashboard to see your achievements and streaks

### For Parents/Teachers
- Monitor progress via the Dashboard
- Check which letters have been learned per language
- View quiz scores and performance trends
- Reset progress if needed (Dashboard → Reset button)

---

## 📱 Browser Support

| Feature | Requirement |
|---------|------------|
| Basic App | Modern browsers (Chrome, Firefox, Safari, Edge) |
| Audio Pronunciation | Web Speech API support |
| Letter Tracing | Canvas API + Mouse/Touch events |
| Progress Storage | localStorage (typically all modern browsers) |

### Known Limitations
- Web Speech API voice quality varies by OS and installed voice packs
- Letter tracing requires a pointing device (mouse or touch)
- Tested on mobile iOS and Android devices

---

## 🎨 Customization

### Adding New Letters
Edit the data files to add more letters:

**Example** (`src/data/englishLetters.js`):
```javascript
const words = [
  { word: "Apple", emoji: "🍎" },
  { word: "Ball", emoji: "⚽" },
  // Add more...
]
```

### Changing Colors
Edit CSS variables in `index.css`:
```css
:root {
  --rainbow-pink: #ff6b9d;
  --rainbow-orange: #ffa500;
  --rainbow-blue: #4ecdc4;
  /* etc. */
}
```

### Adjusting Tracing Difficulty
Modify `TracingCanvas.jsx`:
- Change `FADE_LEVEL` for letter opacity
- Adjust `BRUSH_SIZE` for drawing stroke width
- Modify accuracy threshold (currently 80%)

---

## 🐛 Known Issues & TODOs

### Current Limitations
- Web Speech API voice output depends on system language packs
- No offline mode (requires internet for fonts, though app works offline)
- No user authentication (uses localStorage only)
- No parent dashboard or separate admin panel

### Potential Enhancements
- [ ] Add more languages (Kannada, Marathi, Bengali, etc.)
- [ ] Implement user accounts and cloud sync
- [ ] Add more quiz types (matching, fill-in-the-blank)
- [ ] Create achievement badges with animations
- [ ] Add difficulty levels (beginner, intermediate, advanced)
- [ ] Implement multiplayer quiz mode
- [ ] Add video tutorials for letter pronunciation
- [ ] Create downloadable progress reports

---

## 🔐 Privacy & Data

- **All data stored locally** using browser localStorage
- No tracking, analytics, or external data collection
- Safe for kids - no personal information required
- Clear your browser data to reset all progress

---

## 📜 License

This project is open source and available for educational use.

---

## 🙏 Acknowledgments

- **Google Fonts** for beautiful typography (Baloo 2, Nunito, Noto Sans)
- **Web Speech API** for pronunciation synthesis
- Inspired by modern language learning apps like Duolingo
- Built with ❤️ for children learning Indian languages

---

## 📞 Support & Feedback

For issues, suggestions, or contributions:
1. Open an issue on the repository
2. Check existing issues before creating duplicates
3. Provide clear steps to reproduce bugs
4. Include browser and OS information

---

## 🎯 Development Tips

### Debugging
- Use React DevTools browser extension
- Check Console for any errors
- Verify localStorage: `localStorage.getItem('bhasha-buddy-progress')`

### Performance
- Lazy load language data if needed
- Optimize canvas rendering for smooth tracing
- Consider code splitting for large language data

### Testing
- Test on multiple devices (mobile, tablet, desktop)
- Verify Web Speech API on different browsers
- Test with different voice languages installed

---

## 🌟 Contributing

Contributions welcome! Areas for help:
- Adding new languages and scripts
- Improving UI/UX design
- Optimizing performance
- Writing tests
- Translating documentation
- Creating educational content

---

**Happy Learning! 🎉 Let's help kids discover the joy of learning new languages!**
