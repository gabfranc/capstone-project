/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./components/**/*.{js,ts,vue}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts,vue}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      serif: ['Jomhuria', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

