/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode using a class (you toggle it via JS)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all React components for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",   // Custom teal color for branding
        secondary: "#0f766e", // Darker teal for dark mode accents
      },
    },
  },
  plugins: [],
}
