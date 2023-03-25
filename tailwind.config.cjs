/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 100%, 100%)",
      cyan: "hsl(180, 66%, 49%)",
      red: "hsl(0, 87%, 67%)",
      gray: "hsl(0, 0%, 75%)",
      "background-gray" : "hsl(0, 0%, 75%)",
      "dark-violet": "hsl(257, 27%, 26%)",
      "grayish-violet": "hsl(257, 7%, 63%)",
      "very-dark-blue": "hsl(255, 11%, 22%)",
      "very-dark-violet": "hsl(260, 8%, 14%)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "12rem",
      },
    },
    extend: {
      backgroundSize: {
        "50%": "50%",
      },
      width: {
        "135%": "135%",
      },
    },
  },
  plugins: [],
};
