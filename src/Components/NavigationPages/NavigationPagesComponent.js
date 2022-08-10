import React from "react"

import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import Categories from '../../Data/Json/categories.json'
import MenuBoxWidget from "../Widgets/MenuBoxWidget"

import './Navigation.css'

const NavigationPagesComponent = (props) => {

    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <>
            <Box sx = {{display: {xs: 'none', md: 'flex'}, flexGrow: 2, justifyContent: 'center'}}>
                {props.pages.map((page) => (
                    <Button
                        variant = {page.variant}
                        sx = {{my: 2, display: 'block', color: "#fff", m: '10px', letterSpacing: "0.1rem !important"}}
                        key = {page.name}
                        onClick = {page.name === 'Categories' ? handleOpenUserMenu : handleCloseUserMenu}
                    >
                        {page.name}
                    </Button>
                ))}
                <a href = "/signup" className = "nav-link">Dashboard</a>
                <MenuBoxWidget
                    menuList = {Categories}
                    anchorElUser = {anchorElUser}
                    setAnchorElUser = {() => setAnchorElUser()}
                />
            </Box>
        </>
    )
}

export default NavigationPagesComponent