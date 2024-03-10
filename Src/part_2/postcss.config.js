export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      autoprefixer: { grid: true },
      stage: 1,
      features: {
        'nesting-rules': true
      }
    }
  },
}
