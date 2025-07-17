import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Uygulamanın taranacağı yollar
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'oklch(44.8% 0.119 151.328)',
        'secondary': 'oklch(44.8% 0.119 151.328)',
        'textlight': '#f8fafc', // çok açık bir renk, isterseniz değiştirilebilir
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
