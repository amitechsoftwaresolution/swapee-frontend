import React from 'react'

import {connect} from 'react-redux'

import {Box, Drawer, List, Divider, ListItem, ListItemIcon} from '@mui/material'

import LogoComponent from "../Logo/LogoComponent"

import {logout} from '../../redux/actions/authAction'

import paths from '../../Data/Json/paths.json'

import './Drawer.css'

const DrawerPanel = ({open, links, icons, handleDrawer, authResponse, signOut}) => {

    const handleLogOut = () => {
        signOut()
    }

    const renderLinkItem = (idx, item) => {
        const {href, label} = item
        return (
            <ListItem key = {idx}>
                <ListItemIcon> {icons[label]} </ListItemIcon>
                <a href = {href} className = "drawer-links">{label}</a>
            </ListItem>
        )
    }

    const renderNavLinks = (data) => (
        <List>
            { data.map((item, idx) => {
                if (item.label === "Dashboard") {
                    if (authResponse && authResponse.role && authResponse.role === 'admin') {
                        return renderLinkItem(idx, item)
                    }

                    return null
                }
                return renderLinkItem(idx, item)
            } ) }
        </List>
    )

    const renderLinkContainer = () => (
        <div>
            <div className = 'logo-component'>
                <LogoComponent />
            </div>
            { renderNavLinks(links.main) }
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "10px", m: "7px"}}/>
            { renderNavLinks(links.quickLinks) }
        </div>
    )

    const renderLoggedUserFooter = () => (
        <List>
            <ListItem>
                <div className = "logout_btn" onClick = {handleLogOut}>LOG OUT</div>
            </ListItem>
        </List>
    )

    const renderLoggedOutUserFooter = () => (
        <List>
            <ListItem>
                <a href = {paths.SignIn} className = "login_btn">LOGIN</a>
            </ListItem>
            <ListItem>
                <a href = {paths.SignUp} className = "join_btn">Join Now</a>
            </ListItem>
        </List>
    )

    const renderFooterContainer = () => (
        <div>
            { authResponse ? renderLoggedUserFooter() : renderLoggedOutUserFooter() }
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

const mapStateToProps = state => ({
    authResponse: state.auth.authResponse
})

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => { dispatch(logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerPanel)