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
        // Blue, Light Purple, and White theme
        'primary': {
          50: '#EFF6FF',   // Very light blue
          100: '#DBEAFE',  // Light blue
          200: '#BFDBFE',  // Medium light blue
          300: '#93C5FD',  // Medium blue
          400: '#60A5FA',  // Blue
          500: '#3B82F6',  // Primary blue
          600: '#2563EB',  // Dark blue
          700: '#1D4ED8',  // Darker blue
          800: '#1E40AF',  // Very dark blue
          900: '#1E3A8A',  // Darkest blue
        },
        'secondary': {
          50: '#FAF5FF',   // Very light purple
          100: '#F3E8FF',  // Light purple
          200: '#E9D5FF',  // Medium light purple
          300: '#D8B4FE',  // Medium purple
          400: '#C084FC',  // Purple
          500: '#A855F7',  // Primary purple
          600: '#9333EA',  // Dark purple
          700: '#7C3AED',  // Darker purple
          800: '#6B21A8',  // Very dark purple
          900: '#581C87',  // Darkest purple
        },
        // Legacy colors for compatibility
        'sage': {
          100: '#EBF3ED',
          200: '#C3DBC9',
          500: '#84AE92',
          600: '#5A827E',
        },
        'mint': {
          50: '#F1FDF4',
          100: '#DFF1E6',
        },
        'teal': {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
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
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
};