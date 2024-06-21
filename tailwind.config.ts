import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '100': '#F4F4F4',
          '900': '#212121',
        },
        lesEchos: {
          primary: '#B00005',
        },
        subscriptionYellow: '#FFDD00',
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)'],
        sans: ['var(--font-source-sans-pro)'],
      },
    },
  },
  plugins: [],
};
export default config;
