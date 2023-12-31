/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      '1': '0.5rem',
      '2': '1rem',
      '3': '1.5rem',
      '4': '2rem',
      '5': '2.5rem',
      '6': '3rem',
      '7': '3.5rem',
      '8': '4rem',
      '9': '4.5rem',
      '10': '5rem',
      '11': '5.5rem',
      '12': '6rem',
      '14': '7rem',
      '16': '8rem',
      '20': '9rem',
      '24': '10rem',
      '28': '11rem',
      '32': '12rem',
      '36': '13rem',
      '40': '14rem',
      '44': '15rem',
      '48': '16rem',
      '52': '17rem',
      '56': '18rem',
      '60': '19rem',
      '64': '20rem',
      '68': '21rem',
      '72': '22rem',
      '76': '23rem',
      '80': '24rem',
      '84': '25rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
