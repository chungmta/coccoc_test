/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    // extend: {},
    colors: ({ colors }) => ({
      ...colors,
      primary: '#4fba69',
    }),
  },
  plugins: [],
};
