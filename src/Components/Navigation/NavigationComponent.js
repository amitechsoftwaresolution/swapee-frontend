import React, {useState} from "react"

import {connect} from 'react-redux'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

import MobileMenuBoxComponent from '../MobileMenu/MobileMenuBoxComponent'
import ProfileIconComponent from "../ProfileIcon/ProfileIconComponent"
import LogoComponent from "../Logo/LogoComponent"
import NavigationPagesComponent from "../NavigationPages/NavigationPagesComponent"
import SearchBarComponent from "../SearchBar/SearchBarComponent"

const NavigationComponent = ({authResponse}) => {
    const [navFixed, setNavFixed] = useState(false)

    const changeNavbarDesign = () => {
        if (window.scrollY >= 80) {
            setNavFixed(true)
        }
        else {
            setNavFixed(false)
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeNavbarDesign)
    }

    const profileMenuList = [
        {
            type:'Profile',
            icon: AccountCircleIcon
        },
        {
            type:'Logout',
            icon: ExitToAppIcon
        }
    ]

    const renderProfileIcon = () => (
        <ProfileIconComponent tooltip = "Open settings" alt = "Username" menuList = {profileMenuList} />
    )

    return (
        <div>
            <AppBar position = {navFixed ? 'fixed':'static'} className = 'nav'>
                <Container maxWidth = "xl">
                    <Toolbar disableGutters>
                        <MobileMenuBoxComponent />
                        <LogoComponent textColor = "text.secondary" position = "start" />
                        <NavigationPagesComponent authResponse = {authResponse} />
                        <SearchBarComponent placeholder = "Search" xs = 'none'/>
                        { authResponse && authResponse.token && renderProfileIcon() }
                    </Toolbar>
                </Container>
            </AppBar>

            <style>{`
                .nav{
                    background: rgba(75, 78, 95, 1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    background: linear-gradient(110deg, #4b4e5f 60%, #fcfcfc 0%);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
            `}</style>
        </div>
    )
}

const mapStateToProps = state => ({
    authResponse: state.auth.authResponse
})

export default connect(mapStateToProps)(NavigationComponent)