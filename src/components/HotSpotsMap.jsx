import { useState } from 'react'

const venues = [
  {
    id: 1,
    name: 'LIV Sandton',
    vibe: 'LIT • PEAKING NOW',
    match: 99,
    image: '🔥',
    tags: ['RED', 'ORANGE', 'YELLOW'],
  },
  {
    id: 2,
    name: 'The Palace',
    vibe: 'VIBE MATCH 99%',
    match: 99,
    image: '🟢',
    tags: ['GREEN', 'BLUE', 'PURPLE'],
  },
  {
    id: 3,
    name: 'Ocaso Lounge',
    vibe: 'CHILL',
    match: 85,
    image: '🔵',
    tags: ['CYAN', 'BLUE', 'GREEN'],
  },
]

export default function HotSpotsMap() {
  const [selectedVenue, setSelectedVenue] = useState(null)

  return (
    <div className="flex justify-center items-start min-h-screen px-4 pt-8">
      <div className="glass-card max-w-md w-full">
        {selectedVenue ? (
          <>
            {/* Back Button */}
            <button
              onClick={() => setSelectedVenue(null)}
              className="text-neon-cyan glow-cyan mb-4 text-lg hover:text-neon-pink transition-all"
            >
              ← Back
            </button>

            {/* Venue Details */}
            <h2 className="text-3xl font-bold text-white mb-2">{selectedVenue.name}</h2>

            <div className="mb-6 rounded-2xl overflow-hidden glass-card bg-gradient-to-b from-neon-orange/30 to-neon-pink/30 h-48 flex items-center justify-center text-6xl">
              {selectedVenue.image}
            </div>

            <p className="text-neon-cyan text-sm uppercase tracking-wider mb-4 font-semibold">
              {selectedVenue.vibe}
            </p>

            <div className="space-y-4 mb-8 text-white/80">
              <div className="flex items-center gap-2">
                <span>🔥</span>
                <span>{selectedVenue.match}% Vibe Match</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>Crowd: Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💫</span>
                <span>Good for: Going Solo</span>
              </div>
            </div>

            {/* Live Updates */}
            <div className="mb-8 pb-8 border-b border-white/20">
              <h3 className="text-white font-semibold mb-3">Live Updates:</h3>
              <p className="text-white/70 text-sm mb-2">You just boosted the vibe! 🎉</p>
              <p className="text-white/70 text-sm">DJ ALEX ON DECK NOW!</p>
            </div>

            {/* Check In Button */}
            <button className="btn-gradient w-full flex items-center justify-center gap-2">
              <span>Check In & Rate</span>
              <span className="text-xl">➜</span>
            </button>
          </>
        ) : (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <button className="text-neon-cyan glow-cyan text-lg hover:text-neon-pink">←</button>
              <h1 className="text-2xl font-bold text-gradient">Hot Spots Nearby</h1>
              <button className="text-neon-pink glow-pink text-lg hover:text-neon-cyan">❤️</button>
            </div>

            {/* Map */}
            <div className="mb-8 rounded-2xl overflow-hidden glass-card bg-gradient-to-b from-orange-500/20 to-purple-500/20 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🗺️</div>
                <p className="text-white/70 text-sm">Map View</p>
              </div>
            </div>

            {/* Venues Grid */}
            <h3 className="text-lg font-semibold text-white mb-4">Vibe Drops</h3>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {venues.map((venue) => (
                <button
                  key={venue.id}
                  onClick={() => setSelectedVenue(venue)}
                  className="glass-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-2">{venue.image}</div>
                  <p className="text-xs font-semibold text-white mb-2">{venue.name}</p>
                  <div className="flex justify-center gap-1">
                    {venue.tags.map((tag, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === 0
                            ? 'bg-neon-orange'
                            : i === 1
                            ? 'bg-neon-pink'
                            : 'bg-neon-cyan'
                        }`}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
