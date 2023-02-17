/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#f6fbff",
        "primary-200": "#8f979e",
        "primary-300": "#384955",
        "primary-400": "#4c4f57",
        "primary-500": "#1C252B",
        "secondary-100": "#bde3ff",
        "secondary-200": "#3ca0e7",
      },
      backgroundImage: (theme) => ({
        "gradient-desktop":
          "linear-gradient(180deg, #384955 0%, rgba(159, 169, 177, 0.458333) 64.58%, rgba(246, 251, 255, 0) 100%)",
        "gradient-mobile":
          "linear-gradient(180deg, #384955 15.1%, rgba(159, 169, 177, 0.458333) 79.17%, rgba(246, 251, 255, 0) 100%)",
      }),
      content: {
        chevrondown: "url('./assets/chevron-down.svg')",
      },
    },
  },
  plugins: [],
};
