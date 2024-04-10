// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  darkMode: "class",
plugins: [nextui()],
}