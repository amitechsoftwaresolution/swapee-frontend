import React, { Component } from 'react'

import {Box, Grid} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ProfilePageCover from './ProfilePageCover'
import PersonalInfo from './PersonalInfo'
import TabPanel from '../../Components/TabPanel/TabPanel'
import EditPersonal from './EditPersonal'
import ChangePassword from './ChangePassword'
import Settings from './Settings'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import './Profile.css'
import profileImage from '../../Assets/Images/prod2.jpg'

class Profile extends Component {
    state = {
        tabValue: 0,
        username: "",
        email: "",
        location: "",
        contact: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        showPassword: false,
        passwordType: "password",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
    }

    breadcrumbs = ["Profile", "My Account"]

    userDetails = {
        username: "Chris Evans",
        email: "Chris@sample.com",
        location: "Brooklyn",
        contact: "+94 99999999"
    }

    componentDidMount() {
        this.setState({
            username: this.userDetails.username,
            email: this.userDetails.email,
            location: this.userDetails.location,
            contact: this.userDetails.contact
        })
    }

    getPersonalInformationApi = async(data) => {
        try {
            this.setState({ loading: true })
            //const response = await getPersonalInformation(data)
            this.setState({ loading: false })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handlePerosnalInfoApi = async(data) => {
        try {
            this.setState({ loading: true })
            //const response = await updatePersonalInfo(data)
            this.setState({ loading: false })
            this.setSuccessSnackBar("You personal information updated successfully")
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleChangePasswordApi = async(data) => {
        try {
            this.setState({ loading: true })
            //const response = await changePassword(data)
            this.setState({ loading: false })
            this.setSuccessSnackBar("You password successfully changed")
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSettingsApi = async(data) => {
        try {
            this.setState({ loading: true })
            //const response = await updateSettings(data)
            this.setState({ loading: false })
            this.setSuccessSnackBar("You settings successfully updated")
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handlePersonalInfoSubmitOnClick = () => {

    }

    handleChangePasswordSubmitOnClick = () => {
        const {currentPassword, newPassword, confirmPassword} = this.state

        if (currentPassword && newPassword && confirmPassword) {
            const passwordMatched = this.validatePassword(newPassword, confirmPassword)

            if (currentPassword === newPassword) {
                this.setErrorSnackBar('New password and current password cannot be same')
            }
            else if (!passwordMatched) {
                this.setErrorSnackBar('Passwords not matched')
            }
            else {
                const data = {currentPassword, newPassword, confirmPassword}
                this.handleChangePasswordApi(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty')
        }
    }

    handleSettingsSubmitOnClick = () => {

    }

    handlePersonalInfoCancelOnClick = () => {

    }

    handleChangePasswordCancelOnClick = () => {
        this.setState({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            showPassword: false,
            passwordType: "password"
        })
    }

    handleSettingsClearOnClick = () => {

    }

    handleShowPasswordOnClick = () => {
        const {showPassword} = this.state

        let passwordType = showPassword ? "password" : "text"

        this.setState({ showPassword: !showPassword, passwordType })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleTabOnChange = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    validatePassword = (password, confirmPassword) => {
        return password === confirmPassword
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, message} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {message} 
                handleClose = {this.handleSnackBarClose}
            />
        )
    }

    renderMainTab = () => {
        const {tabValue} = this.state
        return (
            <Grid item xs = {12} sm = {6} md = {7}>
                <TabPanel value = {tabValue} index = {0}>
                    <EditPersonal 
                        state = {this.state}
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handlePersonalInfoCancelOnClick}
                        handleSubmitOnClick = {this.handlePersonalInfoSubmitOnClick}
                    />
                </TabPanel>
                <TabPanel value = {tabValue} index = {1}>
                    <ChangePassword 
                        state = {this.state}
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handleChangePasswordCancelOnClick}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleSubmitOnClick = {this.handleChangePasswordSubmitOnClick}
                    />
                </TabPanel>
                <TabPanel value = {tabValue} index = {2}>
                    <Settings 
                        state = {this.state}
                        handleClearOnClick = {this.handleSettingsClearOnClick}
                        handleSubmitOnClick = {this.handleSettingsSubmitOnClick}
                    />
                </TabPanel>
            </Grid>
        )
    }

    renderPersonalInfo = () => {
        return (
            <Grid item xs = {12} sm = {6} md = {5}>
                <PersonalInfo 
                    profileImage = {profileImage}
                    userDetails = {this.userDetails}
                />
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
        const {openSnackBar, loading} = this.state
        return (
            <div className = 'profile-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default Profile