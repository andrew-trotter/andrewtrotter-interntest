import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Button,
  Box,
  SvgIcon,
} from '@mui/material'
import Menu from '../public/svg/Menu.svg'
import WasspLogo from '../public/svg/Logo.svg'
import ArrowDown from '../public/svg/ArrowDown.svg'
import Image from 'next/image'
import React from 'react'

const links = ['SEARCH', 'LOGIN', 'EN']
export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth={false} sx={{ marginTop: '2em', height: '10vh' }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: '1' }}>
            <img src="../svg/Logo.svg" alt="Wassp Logo"></img>
          </Box>
          <Box sx={{ display: 'flex', justifySelf: 'end' }}>
            {links.map((link: string) => (
              <React.Fragment key={link}>
                {link === 'EN' ? (
                  <Box
                    sx={{
                      gap: '1em',
                      marginRight: '2em',
                      display: { xs: 'none', sm: 'flex' },
                    }}
                  >
                    <Typography variant="subtitle1">{link}</Typography>
                    <Image src={ArrowDown} alt="language down arrow"></Image>
                  </Box>
                ) : (
                  <Box sx={{ marginRight: '2em' }}>
                    <Typography variant="subtitle1">{link}</Typography>
                  </Box>
                )}
              </React.Fragment>
            ))}
            <IconButton>
              <Image src={Menu} alt="menu icon"></Image>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
