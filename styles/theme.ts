import { Shadows, createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '052032',
    },
    primary: {
      main: '#ffffff',
    },
  },
  shadows: Array(25).fill('none') as Shadows,
  typography: {
    fontFamily: 'Norwester',
    fontSize: 14,
    body1: {
      fontFamily: 'neue-haas-grotesk-display',
      fontSize: 16,
    },
    body2: {
      fontFamily: 'Norwester',
    },
    button: {
      fontFamily: 'neue-haas-grotesk-display',
      fontSize: 12,
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Norwester',
          fontSize: 'normal',
          src: `url(../fonts/norwester.otf) format('opentype')`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '100',
          borderRadius: '2em',
          borderWidth: '1px',
          maxHeight: '50px',
          paddingInline: '2em',
          paddingBlock: '0.5em',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
