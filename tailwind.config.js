/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all html/js files in root and subfolders
  content: [
    "./*.html",
    "./**/*.html",
    "./javascript/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f5',
          100: '#e3f1ea',
          200: '#c0e1d0',
          300: '#95cdb1',
          400: '#54af82',
          500: '#1f8b57', // primary dark green
          600: '#166b42',
          700: '#135636',
          800: '#0f422a',
          900: '#0c3422'
        }
      },
      boxShadow: {
        'soft': '0 4px 10px -2px rgba(0,0,0,0.04), 0 2px 4px -2px rgba(0,0,0,0.04)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
  ],
}
