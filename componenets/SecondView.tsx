import Image from 'next/image'
import ArrowRight from '../public/svg/ArrowRight.svg'
import { Box, Button, Grid, Typography } from '@mui/material'

export default function SecondView() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        // backgroundImage: `linear-gradient(to top, transparent, rgba(4, 32, 50, 0.5)), url('../svg/Layers.svg'), linear-gradient(to bottom, transparent, rgba(4, 32, 50, 1))`,
        backgroundImage: `url('../svg/Layers.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw',
        backgroundPosition: { xs: 'top -250% center', md: 'top 80% center' },
        padding: '2em',
        overflow: 'hidden',
      }}
    >
      <Grid display={'inline-flex'}>
        <Grid
          item
          sx={{ flex: '1 1 60%', display: { xs: 'none', sm: 'flex' } }}
        ></Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',

            gap: '1.5em',
          }}
        >
          <Grid item>
            <Typography variant="h2" sx={{ lineHeight: 1, letterSpacing: 0 }}>
              WELCOME TO THE WORLD OF WASSP MULTIBEAM
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: 'inline-flex',
              justifyContent: { sm: 'space-between' },
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: '2em',
            }}
          >
            <Typography variant={'body2'}>01</Typography>
            <Typography variant={'body2'}>ABOUT WASSP</Typography>
            <Box sx={{ maxWidth: { xs: '100%', sm: 1 / 2 } }}>
              <Typography
                paragraph
                sx={{ wordWrap: 'normal', paddingRight: '2em' }}
              >
                WASSP, a powerful multi-beam sounder with 120-degree coverage
                and models for deep exploration, offers unparalleled accuracy,
                detail, and versatility. Target fish with steerable sounders,
                generate real-time 3D charts, map fish in water, and make better
                decisions with the user-friendly advanced mode.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  alignSelf: { xs: 'flex-start', sm: 'flex-end' },
                  flexGrow: '0',
                }}
              >
                Our Story
                <Image src={ArrowRight} alt="arrow for contact us"></Image>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ flex: '1 1 40%', display: { xs: 'none', sm: 'flex' } }}
        ></Grid>
      </Grid>
    </Box>
  )
}
