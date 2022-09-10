import React, { Component } from 'react'

import {Box, Grid} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ProfilePageCover from './ProfilePageCover'
import PersonalInfo from './PersonalInfo'

import './Profile.css'
import profileImage from '../../Assets/Images/prod2.jpg'

class Profile extends Component {
    state = {
        tabValue: 0
    }

    breadcrumbs = ["Profile", "My Account"]

    handleTabOnChange = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    renderMainTab = () => {
        return (
            <Grid item xs = {12} sm = {6} md = {7}>

            </Grid>
        )
    }

    renderPersonalInfo = () => {
        return (
            <Grid item xs = {12} sm = {6} md = {5}>
                <PersonalInfo profileImage = {profileImage}/>
            </Grid>
        )
    }

    renderContents = () => {
        const {tabValue} = this.state
        return (
            <div className = 'profile-page-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <ProfilePageCover 
                    value = {tabValue}
                    profileImage = {profileImage}
                    handleChange = {this.handleTabOnChange}
                />
                <Box sx = {{ flexGrow: 1 }} pt = {2} display = "flex" justifyContent = "center">
                    <div className = 'profile-page-contents-root'>
                        <Grid container spacing = {2}>
                            { this.renderPersonalInfo() }
                            { this.renderMainTab() }
                        </Grid>
                    </div>
                </Box>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'profile-page-main-container'>
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'profile-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default Profile