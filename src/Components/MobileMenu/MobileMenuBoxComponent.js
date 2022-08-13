import React, {useState} from "react"

import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import InfoIcon from '@mui/icons-material/Info'
import CategoryIcon from '@mui/icons-material/Category'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DescriptionIcon from '@mui/icons-material/Description'
import SecurityIcon from '@mui/icons-material/Security'

import DrawerPanel from "../Drawer/DrawerPanel"

import Pages from '../../Data/Json/pages.json'

const MobileMenuBoxComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const NAV_ICONS = {
        "Home": <HomeIcon sx = {{color: "#fff"}}/>,
        "Dashboard": <DashboardIcon sx = {{color: "#fff"}}/>,
        "Categories": <CategoryIcon sx = {{color: "#fff"}}/>,
        "About Us": <InfoIcon sx = {{color: "#fff"}}/>,
        "FAQ": <LiveHelpIcon sx = {{color: "#fff"}}/>,
        "Privacy & Policy": <SecurityIcon sx = {{color: "#fff"}}/>,
        "Terms & Condition": <DescriptionIcon sx = {{color: "#fff"}}/>
    }

    const handleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const renderMenuIcon = () => (
        <IconButton
            size = "large"
            aria-label = "account of current user"
            aria-controls = "menu-appbar"
            aria-haspopup = "true"
            color = "secondary"
            onClick = {handleDrawer}
            sx = {{color: "#fff"}}
        >
            <MenuIcon/>
        </IconButton>
    )

    return(
        <>
            <Box sx = {{ display: {xs: 'flex', md: 'none'}, flexGrow: 0}}>
                { renderMenuIcon() }
                <DrawerPanel 
                    open = {drawerOpen} 
                    links = {Pages.Drawer}
                    icons = {NAV_ICONS}
                    handleDrawer = {handleDrawer}
                />
            </Box>
        </>
    )
}

export default MobileMenuBoxComponent