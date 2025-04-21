// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html,css}"
  ],
  safelist: ['font-bold', 'font-sans', 'leading-relaxed'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif']
      },
      lineHeight: {
        relaxed: '1.625'
      }
    }
  },
  plugins: []
};
