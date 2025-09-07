// src/lib/theme.ts
export const sentinelTheme = {
  mode: 'dark',
  colors: {
    bg: {
      base: '#1A2B3C',
      surface: '#222F3E',
      border: '#2F3F50',
    },
    text: {
      primary: '#E6EEF5',
      secondary: '#A0AEC0',
      muted: '#7B8794',
    },
    accent: {
      DEFAULT: '#3B82F6', // controlled trust blue
      hover:   '#2563EB',
    },
    state: {
      success: '#4ADE80',
      warning: '#FBBF24',
      danger:  '#F87171',
    },
  },
  radii: {
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  shadows: {
    card: '0 4px 12px rgba(0,0,0,0.4)',
  },
} as const;

export type SentinelTheme = typeof sentinelTheme;