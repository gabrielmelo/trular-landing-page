module.exports = {
  purge: ['/index.html', './src/styles/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1550px',
    },
    extend: {
      colors: {
        blue: {
          50: '#E5F3FF',
        },
        primary: '#0072D3',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans serif'],
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
