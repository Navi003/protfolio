/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-10": "#FFEFD4",
        "primary-20": "#FFCF7F",
        "primary-30": "#FFBF54",
        "primary-40": "#FFAF29",
        "primary-50": "#FFAF29",
        "primary-60": "#E69E25",
        "primary-70": "#B37A1D",
        "primary-80": "#805815",
        "primary-90": "#4C340C",
        "primary-100": "#332308",
        "primary-110": "#191104",

        "secondary-10": "#E7F0F5",
        "secondary-20": "#E7F0F5",
        "secondary-30": "#9EC2D7",
        "secondary-40": "#86B3CD",
        "secondary-50": "#5595B8",
        "secondary-60": "#3D85AE",
        "secondary-70": "#0C679A",
        "secondary-80": "#08486C",
        "secondary-90": "#06344D",
        "secondary-100": "#02151F",
        "secondary-110": "#010A0F",

        "base-dark": "#0B0A0A",
        "base-light": "#333646",
        "base-medium": "#20222E",
      },
    },
  },
  plugins: [],
};
