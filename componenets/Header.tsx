import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Button,
  Box,
} from '@mui/material'
import Menu from '../public/svg/Menu.svg'
import WasspLogo from '../public/svg/Logo.svg'
import ArrowDown from '../public/svg/ArrowDown.svg'
import Image from 'next/image'
import React from "react"

const links = ['SEARCH', 'LOGIN', 'EN']
export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth={false} sx={{marginTop:'3em'}} >
        <Toolbar disableGutters>
          <Box sx={{flexGrow: '1'}}>
            <Image src={WasspLogo} alt="Wassp Logo"></Image>
          </Box>
          <Box sx={{ display: 'flex', gap: "2em", justifySelf: 'end' }}>
            {links.map((link: string) => (
              <React.Fragment key={link}>                
                  {link === 'EN' ? (
                    <Box sx={{ gap:"1em", display:{xs:'none', sm:'flex'}}}>
                      <Typography>{link}</Typography>
                      <Image src={ArrowDown} alt="language down arrow"></Image>
                    </Box>
                  ) : (
                    <Box>
                      <Typography>{link}</Typography>
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
