import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0f172a', // Deep Slate/Navy
      light: '#334155',
      dark: '#020617',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0ea5e9', // Vibrant Sky Blue
      light: '#7dd3fc',
      dark: '#0369a1',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#10b981', // Emerald for health/success accents
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc', // Light grayish blue for sections
      alt: '#f1f5f9',    // Slightly darker alternative background
    },
    text: {
      primary: '#1e293b', // Slate 800
      secondary: '#64748b', // Slate 500
      disabled: '#94a3b8',
    },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: '"Lexend Deca", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#0f172a',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: '#0f172a',
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h3: {
      fontWeight: 700,
      color: '#1e293b',
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      color: '#1e293b',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#475569',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 28px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px -10px rgba(14, 165, 233, 0.5)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#1e293b',
            boxShadow: '0 12px 24px -10px rgba(15, 23, 42, 0.4)',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#0284c7',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          transition: 'all 0.4s ease',
          border: '1px solid #f1f5f9',
          // boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;

