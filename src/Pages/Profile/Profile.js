import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ProfilePageCover from './ProfilePageCover'

import './Profile.css'

class Profile extends Component {
    state = {
        tabValue: 0
    }

    breadcrumbs = ["Profile", "My Account"]

    handleTabOnChange = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    renderContents = () => {
        const {tabValue} = this.state
        return (
            <div className = 'profile-page-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <ProfilePageCover 
                    value = {tabValue}
                    handleChange = {this.handleTabOnChange}
                />
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