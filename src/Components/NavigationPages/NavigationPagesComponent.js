import React, {useState} from "react"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import Categories from '../../Data/Json/categories.json'
import MenuBoxWidget from "../Widgets/MenuBoxWidget"

import './Navigation.css'

const NavigationPagesComponent = ({pages}) => {
    const [anchorElUser, setAnchorElUser] = useState(null)

    const currentUser = { role: "", token: null }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const renderSignInButton = () => (
        <a href = "/signin" className = "nav-link">Sign in</a>
    )

    const renderDashBoardButton = () => (
        <a href = "/dashboard" className = "nav-link">Dashboard</a>
    )

    const renderMenu = () => (
        <MenuBoxWidget
            menuList = {Categories}
            anchorElUser = {anchorElUser}
            setAnchorElUser = {() => setAnchorElUser()}
        />
    )

    return (
        <>
            <Box sx = {{display: {xs: 'none', md: 'flex'}, flexGrow: 2, justifyContent: 'center'}}>
                {pages && pages.map((page) => (
                    <Button
                        variant = {page.variant}
                        sx = {{my: 2, display: 'block', color: "#fff", m: '10px', letterSpacing: "0.1rem !important"}}
                        key = {page.name}
                        onClick = {page.name === 'Categories' ? handleOpenUserMenu : handleCloseUserMenu}
                    >
                        {page.name}
                    </Button>
                ))}
                { currentUser && !currentUser.token && renderSignInButton() }
                { currentUser && currentUser.role && currentUser.role === 'admin' &&  renderDashBoardButton() }
                { renderMenu() }
            </Box>
        </>
    )
}

export default NavigationPagesComponent