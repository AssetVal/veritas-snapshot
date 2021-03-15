const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#105f9e'
        }
      }
    }
  }
};
