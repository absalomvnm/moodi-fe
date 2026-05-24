# 🎉 Moodi-fe — Frontend

The **React + Vite web dashboard** for Moodi, a real-time nightlife discovery platform that matches users to venues based on mood.

## 🎨 Design Philosophy

**Glassmorphism + Neon Cosmic UI** — Blurred gradients, translucent cards, soft shadows, and glowing neon effects create an immersive, modern nightlife experience.

- **Dark cosmic background** with purple-to-blue gradients
- **Translucent glass cards** with backdrop blur effects
- **Neon accent colors**: Cyan, Pink, Orange
- **Rounded components** with smooth animations
- **Soft glow effects** on interactive elements

## 📋 Features

### **VibeAlert** 🎚️
- Three interactive sliders: Calm → Solo → Party
- Real-time vibe percentage display
- Gradient neon styling with glow effects
- "Show Me Spots" button for venue discovery

### **HotSpotsMap** 🗺️
- Map view of nearby venues
- Venue cards with vibe match percentages
- Live crowd data and vibe scores
- Quick venue details and check-in capability

### **Rewards** 🏆
- Points system and achievements
- Tier-based progression (Night Explorer, VIP)
- Redeemable rewards and badges
- Event ticket discounts and special perks

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **React Router** — Client-side navigation

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/absalomvnm/Moodi-fe.git
cd Moodi-fe

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
Moodi-fe/
├── src/
│   ├── components/
│   │   ├── VibeAlert.jsx      # Mood selection interface
│   │   └── HotSpotsMap.jsx    # Venue discovery map
│   ├── App.jsx                # Main app with navigation
│   ├── index.css              # Global glassmorphism styles
│   └── main.jsx               # React entry point
├── public/
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind theme customization
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Customizing the Design

### Colors
Edit `tailwind.config.js` to adjust:
- `cosmic-dark`, `cosmic-purple` — Background colors
- `neon-cyan`, `neon-pink`, `neon-orange` — Accent colors
- `glow` shadows and gradients

### Fonts & Spacing
Tailwind utilities in `src/index.css` handle typography and spacing.

### Glass Effects
Predefined classes:
- `.glass-card` — Glassmorphism card
- `.glow-cyan / .glow-pink / .glow-orange` — Neon glow effects
- `.btn-gradient` — Animated gradient buttons

## 📡 API Integration

When ready to connect to the backend:

1. Create an `src/services/api.js` file
2. Configure axios or fetch for backend endpoints
3. Update components to fetch real venue and vibe data
4. Connect to Moodi's microservices:
   - Auth Service
   - Venue Service
   - Vibe Engine
   - Rewards Service

## 📚 System Architecture

This frontend integrates with:

```
API Gateway
├── Auth Service (JWT)
├── User Service
├── Venue Service
├── Vibe Engine (real-time scoring)
├── Matching Engine
├── Rewards Service
└── Monetization Service
```

## 🔮 Future Enhancements

- [ ] Real-time venue data from Kafka streams
- [ ] Advanced venue filtering
- [ ] Social features (check-ins, shared vibes)
- [ ] Augmented Reality venue overlays
- [ ] Music genre and DJ integration
- [ ] Push notifications for trending spots
- [ ] Dark mode toggle (already designed for dark theme)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 License

MIT License — See LICENSE file for details

---

**Made with 💜 for nightlife explorers everywhere.**

*Ready to find your vibe?* 🎉✨
