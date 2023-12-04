import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "gray-100": "#777777",
        "primary-color": {
          default: "#0FABBE",
          100: "#FFFFFF"
        },
        "orange-100": "#EF7437",
        "secondary-color": "#444444",
        "bg-wrapper-100": "#3B668C",
        "bg-wrapper-200": "#282B30"
      },
      backgroundImage : {
        'hero.bg': "url('/Hero.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
