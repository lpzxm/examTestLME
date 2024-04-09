/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tiltNeon: ["Tilt Neon","sans-serif"]
      },
    },
  },
  plugins: [],
}