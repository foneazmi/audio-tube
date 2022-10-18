/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handWriting: ["Bad Script"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
};
