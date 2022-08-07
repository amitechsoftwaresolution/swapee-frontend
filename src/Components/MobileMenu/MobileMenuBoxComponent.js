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

const MobileMenuBoxComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const NAV_LINKS = [
        {label: "Home", href: "/", icon: <HomeIcon sx = {{color: "#fff"}}/>},
        {label: "Dashboard", href: "/", icon: <DashboardIcon sx = {{color: "#fff"}}/>},
        {label: "Categories", href: "/", icon: <CategoryIcon sx = {{color: "#fff"}}/>},
        {label: "About Us", href: "/", icon: <InfoIcon sx = {{color: "#fff"}}/>},
        {label: "FAQ", href: "/", icon: <LiveHelpIcon sx = {{color: "#fff"}}/>},
        {label: "Privacy & Policy", href: "/", icon: <SecurityIcon sx = {{color: "#fff"}}/>},
        {label: "Terms & Condition", href: "/", icon: <DescriptionIcon sx = {{color: "#fff"}}/>}
    ]

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
                <DrawerPanel open = {drawerOpen} links = {NAV_LINKS} handleDrawer = {handleDrawer}/>
            </Box>
        </>
    )
}

export default MobileMenuBoxComponent
