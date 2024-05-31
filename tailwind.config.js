module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "accent-1": "rgba(var(--color-accent-1), <alpha-value>)",
      },
    },
  },
  plugins: [],
};