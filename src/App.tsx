import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          <span className="text-green-500">SNAKE</span> GRID
        </h1>
        <p className="text-slate-400 text-lg">Cyberpunk Edition</p>
      </header>

      <main className="w-full max-w-2xl">
        {/* Game board placeholder */}
        <div className="game-board aspect-square max-w-[600px] mx-auto flex items-center justify-center">
          <div className="text-center text-slate-500">
            <div className="text-6xl mb-4">🐍</div>
            <p className="text-xl">Game board ready</p>
            <p className="text-sm mt-2">Implementation coming in next story</p>
          </div>
        </div>

        {/* Controls hint */}
        <div className="mt-8 flex justify-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">WASD</kbd>
            <span>or</span>
            <kbd className="px-2 py-1 bg-slate-800 rounded border border-slate-700">Arrows</kbd>
            <span>to move</span>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-slate-600 text-sm">
        Built with Vite + React + TypeScript + Tailwind
      </footer>
    </div>
  )
}

export default App
