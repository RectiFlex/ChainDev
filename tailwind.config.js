/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#121217',
        secondary: '#1E1E24',
        accent: '#00B4B4', // Teal accent
        'dark-glass': 'rgba(18, 18, 23, 0.85)',
        'light-glass': 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(0, 180, 180, 0.2)', // Updated glow effect for teal
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1A1A1F, #23232A)',
      },
    },
  },
  plugins: [],
};