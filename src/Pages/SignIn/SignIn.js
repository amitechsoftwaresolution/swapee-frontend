import React, { Component } from 'react'

import {Grid, CssBaseline, Paper} from '@mui/material'
import SignInForm from './SignInForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'

import './SignIn.css'
import signin_cover from '../../Assets/Images/signin_cover.jpg'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        showPassword: false,
        passwordType: "password"
    }

    handleSignInApi = async(data) => {
        try {
            this.setState({ loading: true })
            // handle sign in api
            this.setState({ loading: false, email: "", password: "", message: null })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleLoginOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {email, password}
                this.handleSignInApi(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty' )
        }
    }

    handleCancelOnClick = () => {
        this.setState({email: "", password: ""})
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

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {6} component = {Paper} elevation = {6} sx={{
                    backgroundImage: `url(${signin_cover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {11} sm = {8} md = {6}>
                    <SignInForm 
                        state = {this.state} 
                        handleInputOnChange = {this.handleInputOnChange}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleLoginOnClick = {this.handleLoginOnClick}
                    />
                </Grid>
            </Grid>
        )
    }

    render() {
        const {openSnackBar} = this.state
        return (
            <div className = 'signin-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
            </div>
        )
    }
}

export default SignIn