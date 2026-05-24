/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-dark': '#0f0818',
        'cosmic-purple': '#2d1b4e',
        'neon-cyan': '#00d4ff',
        'neon-pink': '#ff1493',
        'neon-orange': '#ff6b35',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 20, 147, 0.5)',
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.5)',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '10px',
        'lg': '20px',
      },
    },
  },
  plugins: [],
}
