import React, { Component } from 'react'

import {Box, Grid} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ProfilePageCover from './ProfilePageCover'
import PersonalInfo from './PersonalInfo'
import TabPanel from '../../Components/TabPanel/TabPanel'
import EditPersonal from './EditPersonal'
import ChangePassword from './ChangePassword'

import './Profile.css'
import profileImage from '../../Assets/Images/prod2.jpg'

class Profile extends Component {
    state = {
        tabValue: 0,
        username: "Chris Evans",
        email: "Chris@sample.com",
        location: "Brooklyn",
        contact: "+94 99999999",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        showPassword: false,
        passwordType: "password"
    }

    breadcrumbs = ["Profile", "My Account"]

    handleSubmitOnClick = () => {

    }

    handleCancelOnClick = () => {

    }

    handleShowPasswordOnClick = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleTabOnChange = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    renderMainTab = () => {
        const {tabValue} = this.state
        return (
            <Grid item xs = {12} sm = {6} md = {7}>
                <TabPanel value = {tabValue} index = {0}>
                    <EditPersonal 
                        state = {this.state}
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleSubmitOnClick = {this.handleSubmitOnClick}
                    />
                </TabPanel>
                <TabPanel value = {tabValue} index = {1}>
                    <ChangePassword 
                        state = {this.state}
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleSubmitOnClick = {this.handleSubmitOnClick}
                    />
                </TabPanel>
                <TabPanel value = {tabValue} index = {2}>
                    Item Three
                </TabPanel>
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