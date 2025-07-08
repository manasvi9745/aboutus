/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        // New color theme
        'teal': {
          50: '#F0F9F8',
          100: '#E1F3F1',
          200: '#C3E7E3',
          300: '#A5DBD5',
          400: '#87CFC7',
          500: '#5A827E', // Primary dark teal
          600: '#4A6B68',
          700: '#3A5452',
          800: '#2A3D3C',
          900: '#1A2626',
        },
        'sage': {
          50: '#F5F9F6',
          100: '#EBF3ED',
          200: '#D7E7DB',
          300: '#C3DBC9',
          400: '#AFCFB7',
          500: '#84AE92', // Medium green
          600: '#6A8E75',
          700: '#506E58',
          800: '#364E3B',
          900: '#1C2E1E',
        },
        'mint': {
          50: '#FAFFCA', // Pale yellow
          100: '#F8FDB8',
          200: '#F5FBA6',
          300: '#F2F994',
          400: '#EFF782',
          500: '#B9D4AA', // Light green
          600: '#94AA88',
          700: '#6F8066',
          800: '#4A5544',
          900: '#252B22',
        },
        'forest': {
          100: '#5A827E',
          200: '#4A6B68',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-30px) rotate(3deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      }
    },
  },
  plugins: [],
};