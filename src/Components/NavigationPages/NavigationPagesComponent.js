import React, {useState} from "react"

import Box from "@mui/material/Box"

import Categories from '../../Data/Json/categories.json'
import MenuBoxWidget from "../Widgets/MenuBoxWidget"

import {appBarLinks} from '../../Data/Values/Values'
import paths from '../../Data/Json/paths.json'

import './Navigation.css'

const NavigationPagesComponent = () => {
    const [anchorElUser, setAnchorElUser] = useState(false)

    const currentUser = { role: "", token: null }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const renderSignInButton = () => (
        <a href = {paths.SignIn} className = "appbar-link">Sign in</a>
    )

    const renderDashBoardButton = () => (
        <a href = {paths.Dashboard} className = "appbar-link">Dashboard</a>
    )

    const renderMenu = () => (
        <MenuBoxWidget
            menuList = {Categories}
            anchorElUser = {anchorElUser}
            setAnchorElUser = {() => setAnchorElUser()}
        />
    )

    const renderPageLink = (page) => (
        <a href = {page.href} key = {page.label} className = "appbar-page-link">{page.label}</a>
    )

    const renderCategoryLink = (page) => (
        <div className = "appbar-page-link" key = {page.label} onClick = {handleOpenUserMenu}>{page.label}</div>
    )

    return (
        <Box sx = {{display: {xs: 'none', md: 'flex'}, flexGrow: 2, alignItems: "center"}}>
            {appBarLinks && appBarLinks.map((page) => page.label === "Categories" ? renderCategoryLink(page) : renderPageLink(page))}
            <Box sx = {{marginLeft: "20px"}}>
                { currentUser && !currentUser.token && renderSignInButton() }
                { currentUser && currentUser.role && currentUser.role === 'admin' &&  renderDashBoardButton() }
            </Box>
            { renderMenu() }
        </Box>
    )
}

export default NavigationPagesComponent