module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fb923c",
          "secondary": "#b3e2ff",
          "accent": "#d97706",
          "neutral": "#555555",
          "base-100": "#f5f5f4",
          "info": "#78716c",
          "success": "#08bd7d",
          "warning": "#fbbd23",
          "error": "#ef4444",
        },
      },
    ],
  },
};
