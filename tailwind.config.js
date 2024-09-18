/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(57.4% 110.43% at 50% 50%, rgba(15, 15, 15, 0.9) 0%, #0F0F0F 100%)',
      },
    },
  },
  plugins: [],
}

