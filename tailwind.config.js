export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tooltip: "rgba(0, 0, 0, 0.7)"
      },
      fontSize: {
        'tooltip': '1.1rem'
      }
    },
  },
  plugins: [],
};