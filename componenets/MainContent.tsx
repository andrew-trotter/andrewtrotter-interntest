import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowRight from '../public/svg/ArrowRight.svg'
import Header from './Header'

export default function MainContent() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `linear-gradient(to bottom, transparent, rgba(4, 32, 50, 1)), url('../images/01.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center left 70%',
        backgroundOrigin: 'border-box',
      }}
    >
      <Header />
      <Grid
        container
        sx={{
          height: '90vh',
          paddingInline: '1em',
          flexDirection: 'column',
          justifyContent: { xs: 'space-between', sm: 'space-around' },
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
              WASSP multi-beam enables sustainable fishing, exploration, and
              surveys with versatility and detail.
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
  )
}
