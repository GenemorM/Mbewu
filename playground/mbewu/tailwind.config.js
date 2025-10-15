/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mbewu color palette
        'soil-brown': '#3D2914',
        'deep-brown': '#2A1810',
        'indigo-deep': '#1A1B3A',
        'forest-green': '#2D4A22',
        'copper': '#B87333',
        'turquoise': '#40E0D0',
        'magenta': '#FF1493',
        'warm-gold': '#FFD700',
        'earth-orange': '#CC5500',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'recoleta': ['Recoleta', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'seed-pulse': 'seed-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'seed-pulse': {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FFD700, #CC5500, #2D4A22)',
        'earth-gradient': 'linear-gradient(180deg, #1A1B3A, #3D2914)',
        'bridge-gradient': 'linear-gradient(90deg, #B87333, #40E0D0)',
      },
    },
  },
  plugins: [],
}