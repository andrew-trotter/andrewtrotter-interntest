import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Box,
} from '@mui/material'
import Menu from '../public/svg/Menu.svg'
import WasspLogo from '../public/svg/Logo.svg'
import ArrowDown from '../public/svg/ArrowDown.svg'
import Image from 'next/image'

const links = ['SEARCH', 'LOGIN', 'EN']
export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Container sx={{margin:"0"}}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Image src={WasspLogo} alt="Wassp Logo"></Image>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              {links.map((link: string) => (
                <MenuItem key={link}>
                  <Typography>{link}</Typography>
                  {link === "EN" &&
                    <Box sx={{marginLeft:'0.5em'}}>
                      <Image src={ArrowDown} alt='language drop arrow' ></Image>
                    </Box>
                  }
                </MenuItem>
              ))}
              <IconButton>
                <Image src={Menu} alt="menu icon"></Image>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
