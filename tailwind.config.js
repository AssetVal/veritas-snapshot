const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    ({ addUtilities, theme, variants }) => {
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
      "./components/**/*.svelte"
    ],
    enabled: production,
  },
  theme: {
    screens: {
      '5xs': '240px', // Galaxy Fold (280px)
      '4xs': '300px', // iPhone 5 (320px)
      '3xs': '360px', // Galaxy S (360px)
      '2xs': '420px', // IPhone 6/7/8/X (375px), Samsung S7 (414px)
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        dark: {
          transparent: '#00000021'
        },
        coolGray: colors.coolGray,
        black: {
          plum: '#323248',
        },
        blue: {
          primary: '#105f9e',
          secondary: '#86b7fe',
          'primary-dark': '#1a3e5b',
          450: '#105f9e',
          550: '#1b5f9e',
          650: '#2b5a92',
          750: '#234875',
        }
      }
    }
  }
};
