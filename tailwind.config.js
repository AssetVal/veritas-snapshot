const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    ({ addUtilities, e, theme, variants }) => {
      let colors = flattenColorPalette(theme('borderColor'));
      delete colors['default'];

      // Replace or Add custom colors
      if(this.theme?.extend?.colors !== undefined){
        colors = Object.assign(colors, this.theme.extend.colors);
      }

      const colorMap = Object.keys(colors).map(color => ({
        [`.border-t-${color}`]: {borderTopColor: colors[color]},
        [`.border-r-${color}`]: {borderRightColor: colors[color]},
        [`.border-b-${color}`]: {borderBottomColor: colors[color]},
        [`.border-l-${color}`]: {borderLeftColor: colors[color]},
      }));
      const utilities = Object.assign({}, ...colorMap);

      addUtilities(utilities, variants('borderColor'));
    },
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
      "./components/**/*svelte"
    ],
    enabled: production,
  },
  theme: {
    extend: {
      colors: {
        black: {
          plum: '#323248',
        },
        blue: {
          primary: '#105f9e',
          450: '#105f9e',
          550: '#1b5f9e',
          650: '#2b5a92',
          750: '#234875',
        }
      }
    }
  }
};
