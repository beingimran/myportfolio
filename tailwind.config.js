module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--c-canvas)',
        ink: 'var(--c-ink)',
        surface: 'var(--c-surface)',
        line: 'var(--c-line)',
        'line-strong': 'var(--c-line-strong)',
        muted: 'var(--c-muted)',
        soft: 'var(--c-soft)',
        accent: 'var(--c-accent)',
        'accent-ink': 'var(--c-accent-ink)',
        danger: 'var(--c-danger)',
      },
    },
  },
  plugins: [],
};
