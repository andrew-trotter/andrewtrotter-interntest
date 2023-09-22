import Head from 'next/head'
import Header from '../componenets/Header'
import { Typography, ThemeProvider, Box, Grid, Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Image from 'next/image'
import ArrowRight from '../public/svg/ArrowRight.svg'
import theme from '../styles/theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Home - WASSP Multibeam</title>
      </Head>
      <main>
        <Box sx={{ backgroundColor: '#052032' }}>
          <Box
            sx={{
              height: '100vh',
              backgroundImage: `linear-gradient(to bottom, transparent, rgba(4, 32, 50, 1)), url('../images/01.jpg')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
              backgroundOrigin: 'border-box',
            }}
          >
            <Header />

            <Grid
              container
              sx={{
                // display:'flex',
                // paddingTop: '5em',
                // paddingBottom: '3em',
                paddingInline: '1em',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '100%',
              }}
            >
              <Grid
                item
                sx={{ width: '50vw', display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="h5">Sea it all</Typography>
                <Typography variant="h2">
                  MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'inline-flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  // justifyContent: 'flex-end',
                  paddingBottom: '2em',
                  width: '100%',
                }}
              >
                <Box sx={{ flexGrow: { sm: '1' } }}>
                  <Typography
                    paragraph
                    sx={{ maxWidth: '200px', marginInline: { sm: 'auto' } }}
                  >
                    WASSP multi-beam enables sustainable fishing, exploration,
                    and surveys with versatility and detail.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    alignSelf: { xs: 'flex-start', sm: 'flex-end' },
                    flexGrow: '0',
                  }}
                >
                  Contact Us
                  <Image src={ArrowRight} alt="arrow for contact us"></Image>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ height: '100vh', backgroundColor: '#052032' }}></Box>
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
