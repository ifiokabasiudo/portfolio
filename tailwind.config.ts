import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inputSans': ['INPUTSANS', 'sans-serif'],
        'inputSansEL': ['INPUTSANSEL', 'sans-serif'],
        'ibmPlexSans': ['IBMPLEXSANS', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        counterSpin: 'counterSpin 30s linear infinite',
        spin: 'spin 30s linear infinite',
        ping2: 'ping2 1s cubic-bezier(0, 0, 0.2, 1)'
      },
      keyframes: {
        counterSpin: {
        "0%": {
          transform: 'rotate(0deg)'
        },        
        "100%": {
          transform: 'rotate(360deg)'
        }
      },
      spin: {
        "0%": {
          transform: 'rotate(360deg)'
        },        
        "100%": {
          transform: 'rotate(0deg)'
        }
      },
      ping2: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        },
      }
    }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
