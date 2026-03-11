/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0A09',
          50: '#1A1714',
          100: '#151210',
          200: '#211E1A',
          300: '#2D2824',
          400: '#39322E',
        },
        neon: {
          rose: '#E8621A',
          gold: '#D4AF37',
          violet: '#C45A28',
          lime: '#7A9E6B',
          pink: '#C45A28',
        },
        surface: {
          DEFAULT: '#151210',
          light: '#211E1A',
          lighter: '#2D2824',
        },
        muted: {
          DEFAULT: '#B5A99A',
          light: '#C8BEB2',
        },
        text: {
          DEFAULT: '#F5F0EB',
          muted: '#B5A99A',
          bright: '#FAF7F2',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'neon-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(232,98,26,0.09) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(196,90,40,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.06) 0%, transparent 50%)',
        'neon-grid': 'linear-gradient(rgba(232,98,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,98,26,0.04) 1px, transparent 1px)',
        'neon-gradient-rose': 'linear-gradient(135deg, #E8621A, #C45A28)',
        'neon-gradient-gold': 'linear-gradient(135deg, #D4AF37, #C45A28)',
        'neon-gradient-full': 'linear-gradient(135deg, #E8621A, #C45A28, #D4AF37)',
      },
      backgroundSize: {
        'grid-size': '60px 60px',
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(232,98,26,0.35), 0 0 10px rgba(232,98,26,0.12)',
        'neon-md': '0 0 10px rgba(232,98,26,0.45), 0 0 30px rgba(232,98,26,0.18)',
        'neon-lg': '0 0 20px rgba(232,98,26,0.55), 0 0 60px rgba(232,98,26,0.22)',
        'neon-gold-sm': '0 0 5px rgba(212,175,55,0.3), 0 0 10px rgba(212,175,55,0.1)',
        'neon-gold-md': '0 0 10px rgba(212,175,55,0.4), 0 0 30px rgba(212,175,55,0.15)',
        'neon-violet-sm': '0 0 5px rgba(196,90,40,0.3), 0 0 10px rgba(196,90,40,0.1)',
        'neon-violet-md': '0 0 10px rgba(196,90,40,0.4), 0 0 30px rgba(196,90,40,0.15)',
        'neon-glow': '0 0 15px rgba(232,98,26,0.35), 0 0 45px rgba(196,90,40,0.18), inset 0 0 15px rgba(232,98,26,0.06)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'typing': 'typing 3.5s steps(40, end)',
        'thread-flow': 'thread-flow 3s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-border': {
          '0%, 100%': { borderColor: 'rgba(232,98,26,0.3)' },
          '50%': { borderColor: 'rgba(232,98,26,0.65)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'thread-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
    },
  },
  plugins: [],
}
