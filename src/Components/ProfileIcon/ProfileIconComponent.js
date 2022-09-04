import React from "react"

import { Link } from "react-router-dom"

import {connect} from 'react-redux'

import {Box, Tooltip, IconButton, Avatar, Menu, MenuItem} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import {logout} from '../../redux/actions/authAction'

import paths from '../../Data/Json/paths.json'

const ProfileIconComponent = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const authResponse = props && props.authResponse
    const username = authResponse ? authResponse.name : "Anonymous User"

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorElUser(null)
    }

    const handleLogout = () => {
        props.signOut()
    }

    const renderListItem = (label) => (
        <Link style = {{
            fontSize: "0.8rem", 
            letterSpacing: "0.05rem", 
            fontWeight: "550",
            textDecoration: "none",
            color: "#000"
        }}
        to = {paths.Profile}
        >
        {label}
        </Link>
    )

    const renderMenuItems = () => (
        <Box style = {{mt: "25px"}}>
            <MenuItem>
                <AccountCircleIcon color = "info" sx = {{mr:2}}/>
                { renderListItem("Profile") }
            </MenuItem>
            <MenuItem onClick = {handleLogout}>
                <ExitToAppIcon color = "info" sx = {{mr:2}} />
                <span style = {{
                    fontSize: "0.8rem", 
                    letterSpacing: "0.05rem", 
                    fontWeight: "550",
                    color: "#000"
                }}>Log out</span>
            </MenuItem>
        </Box>
    )

    const renderHeader = (header) => (
        <span style = {{marginLeft: "15px", fontSize: "0.85rem"}}>
            {header}
        </span>
    )

    const renderMenu = () => (
        <Menu
            PaperProps = {{
                style: {
                    padding: '16px',
                    borderRadius: '8px 8px 8px 8px',
                    marginTop: "47px"
                },
            }}
            anchorEl = {anchorElUser}
            anchorOrigin = {{vertical: 'top', horizontal: 'right'}} 
            keepMounted 
            open = {Boolean(anchorElUser)}
            transformOrigin = {{vertical: 'top', horizontal: 'right'}} 
            onClose = {handleCloseMenu}
        >
            <Box sx = {{mb: "20px"}}>
                {renderHeader(`Hi ${username}`)}
            </Box>
            { renderMenuItems() }
        </Menu>
    )

    return(
        <Box sx = {{flexGrow: 0, ml: "10px"}}>
            <Tooltip title = {props.tooltip}>
                <IconButton onClick = {handleOpenUserMenu} >
                    <Avatar alt = {username} src = {props.src} sx = {{backgroundColor:'#4b4e5f', width: "30px", height: "30px"}}/>
                </IconButton>
            </Tooltip>
            { renderMenu() }
        </Box>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => { dispatch(logout()) }
    }
}

export default connect(null, mapDispatchToProps)(ProfileIconComponent)