/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'text': '#050315',
      'background': '#fbfbfe',
      'primary': '#2f27ce',
      'secondary': '#dedcff',
      'accent': '#433bff',
     },     
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}