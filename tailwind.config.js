/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          lighter: '#1D3461',
        },
        teal: {
          DEFAULT: '#00BFA6',
          dark: '#009E8C',
        },
        slate: {
          light: '#CCD6F6',
          muted: '#8892B0',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
