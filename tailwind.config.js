/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#1c1c1c',
          window: '#000000',
          header: '#2e3436',
          text: '#ffffff',
          prompt: '#00ff00',
          cursor: '#ffffff',
          red: '#ff5f56',
          yellow: '#ffbd2e',
          green: '#27c93f',
          gray: '#cccccc'
        }
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'typewriter': 'typewriter 2s steps(40) 1s forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        blink: {
          '50%': { backgroundColor: 'transparent' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}