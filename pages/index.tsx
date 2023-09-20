import Head from 'next/head'
import Header from '../componenets/Header'
import { Typography, ThemeProvider, Box, Container, Grid, Button } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Image from 'next/image'



import ArrowRight from "../public/svg/ArrowRight.svg"

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
              <Grid item sx={{ marginLeft: '2em', width: '50vh' }}>
                <Typography variant="h5">Sea it all</Typography>
                <Typography variant="h2">
                  MULTIBEAM SONAR PRODUCTS & SOLUTIONS.
                </Typography>
              </Grid>
            </Grid>
            {/* <Box sx={{display:'flex', justifyContent:'space-between'}}> */}
              <Typography paragraph sx={{maxWidth:'200px'}}>
                WASSP multi-beam enables sustainable fishing, exploration, and
                surveys with versatility and detail.
              </Typography>
              <Button variant='outlined' sx={{ justifySelf:'flex-end' }} >Contact Us<Image src={ArrowRight} alt='arrow for contact us'></Image></Button>

            {/* </Box> */}
          </Box>
        </Box>
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
