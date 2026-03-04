/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a0a0a',
          darker: '#161b22',
          green: '#10b981',
          'green-bright': '#34d399',
          emerald: {
            950: '#022c22',
            900: '#064e3b',
            800: '#065f46',
            700: '#047857',
          },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #0d1117 40%, #064e3b 85%, #065f46 100%)',
      },
    },
  },
  plugins: [],
}
