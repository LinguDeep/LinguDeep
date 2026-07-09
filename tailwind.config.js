/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#10b981',
            dark: '#059669',
            light: '#34d399',
          },
          blue: {
            DEFAULT: '#6366f1',
            dark: '#4f46e5',
            light: '#818cf8',
          },
          yellow: {
            DEFAULT: '#f59e0b',
            dark: '#d97706',
            light: '#fbbf24',
          },
          orange: {
            DEFAULT: '#f97316',
            dark: '#ea580c',
          },
          red: {
            DEFAULT: '#f43f5e',
            dark: '#e11d48',
          },
          purple: {
            DEFAULT: '#8b5cf6',
            dark: '#7c3aed',
          },
          charcoal: {
            DEFAULT: '#0f172a',
            dark: '#020617',
            light: '#94a3b8',
          },
          gray: {
            DEFAULT: '#1e293b',
            dark: '#334155',
            light: '#0f172a',
          }
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      boxShadow: {
        'playful': '0 4px 0 0 rgba(0, 0, 0, 0.1)',
        'playful-inner': 'inset 0 -4px 0 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
