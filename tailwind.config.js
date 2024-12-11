/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        dark: "#171923",
        light: "#fff",
        body: "#1D1E28",
        accent: "#FFAD1F",
        background: "#F5F8FA",
      },
    },
  },
  plugins: [],
};
