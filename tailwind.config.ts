import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'zoom-out': 'zoom-out 15s linear infinite',
        'scroll': 'scroll_arrow 2s linear infinite'
      },
      keyframes: {
        'zoom-out': {
          '0%': {
            transform: 'scale(1.25, 1.25)'
          },
          "100%": {
            transform: 'scale(1, 1)'
          }
        },
        scroll_arrow: {
          '0%': {
            opacity: "1"
          },

          "50%": {
            opacity: "0.35"
          },
          "90%": {
            opacity: "0.35"
          }
        }
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
