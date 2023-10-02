import React from "react"

import {connect} from 'react-redux'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

import MobileMenuBoxComponent from '../MobileMenu/MobileMenuBoxComponent'
import ProfileIconComponent from "../ProfileIcon/ProfileIconComponent"
import LogoComponent from "../Logo/LogoComponent"
import NavigationPagesComponent from "../NavigationPages/NavigationPagesComponent"
import SearchBarComponent from "../SearchBar/SearchBarComponent"

const NavigationComponent = ({authResponse}) => {
    const renderProfileIcon = () => (
        <ProfileIconComponent tooltip = "Open settings" authResponse = {authResponse} />
    )

    return (
        <div style={{marginBottom:'57px'}}>
            <AppBar position = 'fixed' className = 'nav'>
                <Container maxWidth = "xl">
                    <Toolbar disableGutters>
                        <MobileMenuBoxComponent />
                        <LogoComponent textColor = "text.secondary" position = "start" />
                        <NavigationPagesComponent authResponse = {authResponse} />
                        <SearchBarComponent placeholder = "Search" xs = 'none'/>
                        { authResponse && authResponse.email && renderProfileIcon() }
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