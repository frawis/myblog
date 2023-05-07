const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: colors.neutral,
        green: {
          50: '#FDFEEC',
          100: '#FAFDD8',
          200: '#F6FBB2',
          300: '#F1F88B',
          400: '#EDF665',
          500: '#E7F43D',
          600: '#D9E80D',
          700: '#A3AE0A',
          800: '#6D7407',
          900: '#363A03',
          950: '#1B1D02',
        },
        pink: {
          50: '#FFF0F3',
          100: '#FFEEF2',
          200: '#FFC7D4',
          300: '#FFA0B6',
          400: '#FF7A99',
          500: '#FF537B',
          600: '#DD3A61',
          700: '#BB2649',
          800: '#991635',
          900: '#770A23',
          950: '#550215',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', ...fontFamily.sans],
        display: ['var(--font-heading)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
