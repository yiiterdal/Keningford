/** tailwind.config.mjs */
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001f4d',
          dark: '#001530'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
