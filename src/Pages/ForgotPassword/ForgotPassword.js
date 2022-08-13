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
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false
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

    handleSubmitOnClick = () => {
        const {email} = this.state
        if (email) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                this.handleEmailApi(email)
            }
        }
        else {
            this.setErrorSnackBar('Email cannot be empty' )
        }
    }

    handleCancelOnClick = () => {
        this.setState({ email: "" })
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
                        handleSubmitOnClick = {this.handleSubmitOnClick}
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
            </div>
        )
    }
}

export default ForgotPassword