import React, { Component } from 'react'

import {Grid, CssBaseline} from '@mui/material'
import SignUpForm from './SignUpForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'

import './SignUp.css'
import signup_cover from '../../Assets/Images/signup_cover.jpg'

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        showPassword: false,
        showConfirmPassword: false,
        passwordType: "password",
        confirmPasswordType: "password"
    }

    handleSignUpApi = async(data) => {
        try {
            this.setState({ loading: true })
            // handle sign up api
            this.setState({ 
                loading: false,
                name: "",
                email: "", 
                password: "",
                confirmPassword: "",
                message: null
            })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSignUpOnClick = () => {
        const {name, email, password, confirmPassword} = this.state
        if (name && email && password && confirmPassword) {
            const result = this.validateEmail(email)
            const passwordMatched = this.validatePassword(password, confirmPassword)

            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else if (!passwordMatched) {
                this.setErrorSnackBar('Passwords not matched')
            }
            else {
                const data = {name, email, password}
                this.handleSignUpApi(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty' )
        }
    }

    handleCancelOnClick = () => {
        this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    handleShowPasswordOnClick = (name) => {
        const {showPassword, showConfirmPassword} = this.state

        if (name === "password") {
            let passwordType = showPassword ? "password" : "text"
            this.setState({ showPassword: !showPassword, passwordType })
        }
        else {
            let confirmPasswordType = showConfirmPassword ? "password" : "text"
            this.setState({ showConfirmPassword: !showConfirmPassword, confirmPasswordType })
        }
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

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {6} sx = {{
                    backgroundImage: `url(${signup_cover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {11} sm = {8} md = {6}>
                    <SignUpForm 
                        state = {this.state} 
                        handleInputOnChange = {this.handleInputOnChange}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleSignUpOnClick = {this.handleSignUpOnClick}
                    />
                </Grid>
            </Grid>
        )
    }

    render() {
        const {openSnackBar} = this.state
        return (
            <div className = 'signup-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
            </div>
        )
    }
}

export default SignUp