module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#724C9D',
          secondary: '#443C68',
          tertiary: '#2A2A3A',
        },
        background: '#16161a',
        temp: '#18122B',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        contrast: '#2cb67d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
