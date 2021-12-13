// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat'],
      },
      colors: {
        'main1': '#232931',
        'main2': '#393E46',
        'text1': '#FFC045',
        'text2': '#EEEEEE',
        'second1': '#FFC045',
        'second2': '#232931',
        'second3': '#FFB740',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        color: '0 0 10px 0 rgba(255, 188, 53, 0.5), 0 0 6px 0 rgba(255, 188, 53, 0.5), 0 0 10px 0 rgba(255, 188, 53, 0.5)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}