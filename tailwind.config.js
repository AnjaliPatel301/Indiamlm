/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand orange — full scale derived from #F97316
        primary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316', // base
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Deep enterprise background scale
        surface: {
          base: '#0A0A0A',
          raised: '#121212',
          card: '#161616',
          border: '#262626',
        },
        ink: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          400: '#A3A3A3',
          600: '#737373',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', 'sans-serif'],
        sans: ['"General Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% 0%, rgba(249,115,22,0.15), transparent 60%)',
        'orange-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(249,115,22,0.45)',
        'glow-lg': '0 0 80px -20px rgba(249,115,22,0.5)',
        card: '0 8px 30px rgba(0,0,0,0.35)',
        premium: '0 20px 60px -15px rgba(0,0,0,0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
};
