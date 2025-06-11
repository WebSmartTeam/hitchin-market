/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern market palette inspired by heritage and fresh produce
        primary: {
          dark: '#2C5530',
          medium: '#3D7B3F', 
          light: '#F8FDF9',
          emerald: '#0F766E',
        },
        accent: {
          gold: '#D4AF37',
          copper: '#B87333',
          sage: '#9CAF88',
          forest: '#1B4332',
        },
        neutral: {
          cream: '#FEFCF8',
          warm: '#F5F2ED',
          sand: '#E8E4DD',
          stone: '#D1CCC1',
          charcoal: '#2D3436',
        },
        text: {
          dark: '#1A1A1A',
          medium: '#4A4A4A',
          light: '#6B7280',
          muted: '#9CA3AF',
        },
        heritage: {
          burgundy: '#722F37',
          navy: '#1E3A8A',
          gold: '#F59E0B',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        'hero': '4.5rem',
        'section': '2.5rem',
        'card-title': '1.25rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'market-pattern': "url('/assets/Elements/Rainbow-2048x320.png')",
      },
    },
  },
  plugins: [],
}