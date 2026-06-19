/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: 'hsl(0 0% 98%)',
        foreground: 'hsl(0 0% 8%)',
        primary: 'hsl(0 0% 8%)',
        'primary-foreground': 'hsl(0 0% 98%)',
        surface: 'hsl(0 0% 94%)',
        'muted-foreground': 'hsl(0 0% 52%)',
        border: 'hsl(0 0% 88%)',
      },
    },
  },
  plugins: [],
}
