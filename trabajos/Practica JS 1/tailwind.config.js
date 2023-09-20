/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { backdropBlur: {
      'lg': 'blur(16px)', // Ajusta el valor de desenfoque según lo desees
    }},
  },
  plugins: [],
}