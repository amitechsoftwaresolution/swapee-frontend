import React from "react"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import InfoIcon from '@mui/icons-material/Info'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import GridViewIcon from '@mui/icons-material/GridView'
import CategoryIcon from '@mui/icons-material/Category'

import LogoComponent from "../Logo/LogoComponent"

const MobileMenuBoxComponent = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return(
        <>
            <Box sx = {{ display: {xs: 'flex', md: 'none'}, flexGrow: 0}}>
                {/*Mobile menu Icon*/}
                <IconButton
                    size = "large"
                    aria-label = "account of current user"
                    aria-controls = "menu-appbar"
                    aria-haspopup = "true"
                    color = "secondary"
                    onClick = {handleOpenNavMenu}>
                    <MenuIcon/>
                </IconButton>
                {/*Open mobile menu*/}
                <Menu
                    PaperProps = {{
                        style: {
                            maxHeight: '',
                            height: '100vh',
                            width: 'auto',
                            borderRadius: '0%'
                        },
                    }}
                    sx = {{
                        display: {xs: 'block', md: 'none'},
                        mt:{xs:'-65px'} , ml:{xs:'-20px'},
                        width:{xs:'85%'}, height:{xs:'100%'}
                    }}
                    id = "menu-appbar"
                    anchorEl = {anchorElNav}
                    anchorOrigin = {{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open = {Boolean(anchorElNav)}
                    onClose = {handleCloseNavMenu}
                    keepMounted
                    transformOrigin = {{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <LogoComponent textColor="text.secondary" iconColor="secondary" position="left"/>
                    <hr/>

                    <MenuItem  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                        <AccountCircleIcon color="info"/>
                        <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">Login</Typography>
                    </MenuItem>

                    <hr/>

                    <MenuItem  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                        <GridViewIcon color="info"/>
                        <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">Dashboard</Typography>
                    </MenuItem>

                    {props.pages.map((page) => (
                        <MenuItem key={page}  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                            <HomeIcon color="info" />
                            <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}

                    <MenuItem  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                        <CategoryIcon color="info"/>
                        <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">Categories</Typography>
                    </MenuItem>

                    <hr/>
                    <MenuItem  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                        <LiveHelpIcon color="info"/>
                        <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">FAQ</Typography>
                    </MenuItem>

                    <MenuItem  onClick={handleCloseNavMenu} sx={{  width:{xs:'340px' }}}>
                        <InfoIcon color="info"/>
                        <Typography sx={{ml:2}} color="text.disabled"  textAlign="center">About Us</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </>
    )
}

export default MobileMenuBoxComponent
