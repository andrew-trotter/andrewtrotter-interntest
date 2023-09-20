import Head from 'next/head'
import Header from '../componenets/Header'
import styles from '../styles/Home.module.css'
import { Typography, ThemeProvider, Box, Container, Grid } from '@mui/material'

import { Html } from 'next/document'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '../styles/theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Home - WASSP Multibeam</title>
      </Head>
      <main>
        <Box sx={{ height: '100vh', backgroundColor: '#052032' }}>
          <Box
            sx={{
              backgroundImage: "url('../images/01.jpg')",
              backgroundSize: '¨',
              backgroundPositionX: 'center',
            }}
          >
            <Header />
            <Grid container sx={{ marginTop: '5em' }}>
              <Grid item sx={{ height: '' }}></Grid>
              <Grid item sx={{ marginLeft: '2em', width: '50vh' }}>
                <Typography variant="h5">Sea it all</Typography>
                <Typography variant="h2">
                  MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
