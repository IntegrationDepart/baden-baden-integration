/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem'
      },
    },
    extend: {
      animation: {
        'scale-up-down-100s': 'scale-up-down 100s ease-in-out',
        'scale-up-down-120s': 'scale-up-down 100s ease-in-out',
        'scale-up-down-200s': 'scale-up-down 100s ease-in-out',
      },
      keyframes: {
        'scale-up-down': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.6)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      fontFamily: {
        jost: "var(--font-jost)",
        forum: "var(--font-forum)",
      },
      colors: {
       currentBlue:'#00274D',
        currentBlack:'#444444',
        bgSocial:'#D9D9D9'
      },
      boxShadow: {
        'inner': '[-1px_3px_5px_0px_rgba(0,0,0,0.75)]',
      }
    },
  },
  plugins: [],
};
