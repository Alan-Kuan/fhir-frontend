module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1692ff",
          "secondary": "#b3e2ff",
          "accent": "#d97706",
          "neutral": "#555555",
          "base-100": "#e7e5e4",
          "info": "#78716c",
          "success": "#08bd7d",
          "warning": "#fbbd23",
          "error": "#ef4444",
        },
      },
    ],
  },
};
