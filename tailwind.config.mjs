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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif']
      }
    }
  },
  plugins: []
};
