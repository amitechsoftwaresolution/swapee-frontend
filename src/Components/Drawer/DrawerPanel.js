import React from 'react'

import {Box, Drawer, List, Divider, ListItem, ListItemIcon} from '@mui/material'

import LogoComponent from "../Logo/LogoComponent"

import './Drawer.css'

const DrawerPanel = ({open, links, handleDrawer}) => {

    const renderLinkItem = (idx, item) => {
        const {icon, href, label} = item
        return (
            <ListItem key = {idx}>
                <ListItemIcon> {icon} </ListItemIcon>
                <a href = {href} className = "nav-links">{label}</a>
            </ListItem>
        )
    }

    const renderNavLinks = (data) => (
        <List>
            { data.map((item, idx) => renderLinkItem(idx, item) ) }
        </List>
    )

    const renderLinkContainer = () => (
        <div>
            <div className = 'logo-component'>
                <LogoComponent />
            </div>
            { renderNavLinks(links.slice(0, 4)) }
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "10px", m: "7px"}}/>
            { renderNavLinks(links.slice(4, 7)) }
        </div>
    )

    const renderFooterContainer = () => (
        <div>
            <List>
                <ListItem>
                    <a href = "/" className = "login_btn">LOGIN</a>
                </ListItem>
                <ListItem>
                    <a href = "/" className = "join_btn">Join Now</a>
                </ListItem>
            </List>
        </div>
    )

    const renderPanelItems = () => (
        <Box sx = {{ 
                width: 250, 
                height: "100%", 
                background: '#4b4e5f', 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between" 
            }} 
            role = "presentation"
        >
            { renderLinkContainer() }
            { renderFooterContainer() }
        </Box>
    )

    return (
        <Drawer anchor = "left" open = {open} onClose = {handleDrawer}>
            { renderPanelItems() }
        </Drawer>
    )
}

export default DrawerPanel