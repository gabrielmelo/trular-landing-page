module.exports = {
  purge: ['/index.html', './src/styles/**/*.scss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px',
      xl: '1550px',
    },
    extend: {
      colors: {
        blue: {
          50: '#E5F3FF',
        },
        primary: '#0072D3',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
