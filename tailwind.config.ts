import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        clash: ["Clash Display", "sans-serif"],
        unical: ["Unica One", "cursive"],
        tommy: ["MADE TOMMY Outline", "sans-serif"],
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
