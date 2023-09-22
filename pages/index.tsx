import Head from 'next/head'
import Header from '../componenets/Header'
import {
  Typography,
  ThemeProvider,
  Box,
  Container,
  Grid,
  Button,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../styles/theme'
import MainContent from '../componenets/MainContent'
import SecondView from '../componenets/SecondView'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Home - WASSP Multibeam</title>
      </Head>
      <main>
        <Box sx={{ backgroundColor: '#052032' }}>
          <MainContent />
          <SecondView />
        </Box>
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
