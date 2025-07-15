import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Uygulamanın taranacağı yollar
  ],
  theme: {
    extend: {
      colors: {
        'custom-turquoise': '#22c55e',      // Yeşil ağırlıklı turkuaz
        'custom-darkgreen': '#166534',      // Tailwind green-800'e yakın koyu yeşil
        'custom-khaki-green': '#556B2F',    // Haki yeşil tonu
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
