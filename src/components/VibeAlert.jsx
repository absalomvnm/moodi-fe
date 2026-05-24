import { useState } from 'react'

export default function VibeAlert() {
  const [calm, setCalm] = useState(30)
  const [solo, setSolo] = useState(50)
  const [chill, setChill] = useState(40)

  const handleShowSpots = () => {
    alert(`Your vibe: Calm ${calm}% | Solo ${solo}% | Chill ${chill}%`)
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="glass-card max-w-md w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gradient">Vibe Alert</h1>
          <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-glow">
            📺
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-8">Find Your Vibe</h2>

        {/* Calm Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌙</span>
              <span className="text-white font-medium">Calm</span>
            </div>
            <span className="text-neon-cyan glow-cyan text-sm font-semibold">{calm}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={calm}
            onChange={(e) => setCalm(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Solo Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">👤</span>
              <span className="text-white font-medium">Solo</span>
            </div>
            <span className="text-neon-pink glow-pink text-sm font-semibold">{solo}%</span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <input
              type="range"
              min="0"
              max="100"
              value={solo}
              onChange={(e) => setSolo(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-neon-pink font-semibold">👥</span>
          </div>
        </div>

        {/* Chill Slider */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧊</span>
              <span className="text-white font-medium">Chill</span>
            </div>
            <span className="text-neon-orange glow-orange text-sm font-semibold">{chill}%</span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <input
              type="range"
              min="0"
              max="100"
              value={chill}
              onChange={(e) => setChill(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-neon-orange font-semibold">🎉</span>
          </div>
        </div>

        {/* Show Me Spots Button */}
        <button
          onClick={handleShowSpots}
          className="btn-gradient w-full flex items-center justify-center gap-2"
        >
          <span>Show Me Spots</span>
          <span className="text-xl">➜</span>
        </button>
      </div>
    </div>
  )
}
