import { Shadows, createTheme } from '@mui/material'



const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "052032",
    },
    primary: {
      main: '#052032'
    },
  },
  shadows: Array(25).fill("none") as Shadows,
  typography: {
    fontFamily: 'neue-haas-grotesk-display, Norwester',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Norwester',
          fontSize: "normal",
          src: `url(../fonts/norwester.otf) format('opentype')`,
        },
      },
    },
  },
})

export default theme
