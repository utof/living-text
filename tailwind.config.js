export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'fluid': 'clamp(1rem, 10vw, 10rem)',
      }
    },
  },
  plugins: [],
}
