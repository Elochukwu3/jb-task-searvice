import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
      "./node_modules/flowbite/**/*.ts"
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
      backgroundImage: {
        'gradient-btn': 'linear-gradient(109.6deg, rgba(61,131,97,1) 11.2%, rgba(28,103,88,1) 91.1%)',
        "dark": "linear-gradient( 109.6deg,  rgba(61,131,97,1) 11.2%, #022022 91.1% );"
      },
      colors:{
        custom:{
          "dark":"#022022",
          "greaner":'#0d7a5f'
        },
      },
    },
  },
  variants: {
    display: ['group-hover']
  }
}
export default config
