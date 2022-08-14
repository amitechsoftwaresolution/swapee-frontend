import React, { Component } from 'react'

import {Grid} from '@mui/material'

import ForgotPasswordForm from './ForgotPasswordForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import './ForgotPassword.css'
import forgotpassword_cover from '../../Assets/Images/signin_cover.jpg'

class ForgotPassword extends Component {
    state = {
        email: "",
        resetCode: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false,
        passwordType: "password",
        confirmPasswordType: "password",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        activeStep: 0
    }

    handleEmailApi = async(email) => {
        try {
            this.setState({ loading: true })
            // handle api
            this.setState({ loading: false, email: "", message: null })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleEmailStep = () => {
        const {email} = this.state
        if (email) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                this.setState({activeStep: this.state.activeStep + 1})
            }
        }
        else {
            this.setErrorSnackBar('Email cannot be empty')
        }
    }

    handleResetCodeStep = () => {
        const {resetCode} = this.state
        if (resetCode) {
            this.setState({activeStep: this.state.activeStep + 1})
        }
        else {
            this.setErrorSnackBar('Reset code cannot be empty')
        }
    }

    handleResetPasswordStep = () => {
        const {password, confirmPassword} = this.state
        if (password && confirmPassword) {
            const result = this.validatePassword(password, confirmPassword)
            if (!result) {
                this.setErrorSnackBar('Passwords not matched')
            }
            else {
                this.setState({activeStep: 0})
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty')
        }
    }

    handleNextOnClick = () => {
        const {activeStep} = this.state

        if (activeStep === 0) {
            this.handleEmailStep()
        }
        else if (activeStep === 1) {
            this.handleResetCodeStep()
        }
        else {
            this.handleResetPasswordStep()
        }
    }

    handleCancelOnClick = () => {
        const {activeStep} = this.state

        if (activeStep === 0) {
            this.setState({ email: "" })
        }
        else if (activeStep === 1) {
            this.setState({ resetCode: "" })
        }
        else {
            this.setState({ password: "", confirmPassword: "" })
        }
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
                <Grid item xs = {false} sm = {4} md = {5} sx = {{
                    backgroundImage: `url(${forgotpassword_cover})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {false} sm = {false} md = {1}/>
                <Grid item xs = {12} sm = {8} md = {5} sx = {{padding: "15px"}}>
                    <ForgotPasswordForm 
                        state = {this.state} 
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleNextOnClick = {this.handleNextOnClick}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                    />
                </Grid>
                <Grid item xs = {false} sm = {false} md = {1}/>
            </Grid>
        )
    }

    render() {
        const {openSnackBar, loading} = this.state
        return (
            <div className = 'forgot-password-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
                { console.log(this.state) }
            </div>
        )
    }
}

export default ForgotPassword