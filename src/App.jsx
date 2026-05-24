import { useState } from 'react'
import VibeAlert from './components/VibeAlert'
import HotSpotsMap from './components/HotSpotsMap'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('vibe') // 'vibe' or 'map'

  return (
    <div className="cosmic-bg min-h-screen w-full">
      <div className="relative z-10">
        {currentPage === 'vibe' ? (
          <VibeAlert onNavigate={() => setCurrentPage('map')} />
        ) : (
          <HotSpotsMap onNavigate={() => setCurrentPage('vibe')} />
        )}
      </div>
    </div>
  )
}

export default App
