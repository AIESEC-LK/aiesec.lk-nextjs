/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Lato', 'sans-serif'],
      mono: ['Lato', 'sans-serif'],
      display: ['Lato', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    // Responsive Sizes
    screens: {
      xsm: '20px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'aiesec-blue': '#037Ef3',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'black': '#000000',
      'aiesec-light-blue': '#0CB9C1',
      'aiesec-green': '#00C16E',
      'aiesec-purple': '#7552CC',
      'aiesec-dark-grey': '#52565E',
      'aiesec-mid-grey': '#CACCD1',
      'aiesec-light-grey': '#F3F4F7',
      'aiesec-red': '#F85A40',
      'aiesec-orange': '#F48924',
      'aiesec-yellow': '#FFC845',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      padding: {
        '17px': '500px',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
