module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  keyframes: {
    'disappear-appear': {
      '0%': {
        opacity: '1',
      },
      '50%': {
        opacity: '0',
      },
      '100%': {
        opacity: '1',
      },
    },
  },
};
