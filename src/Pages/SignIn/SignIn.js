import React, { Component } from 'react'

import {Grid, CssBaseline, Box} from '@mui/material'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignInButtonWidget from '../../Components/Widgets/SignInButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'

import './SignIn.css'

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

    handleShowPasswordOnClick = () => {
        const {showPassword} = this.state

        let passwordType = showPassword ? "password" : "text"

        this.setState({ showPassword: !showPassword, passwordType })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    renderButtonFooter = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignInButtonWidget name = "Sign In" background = "rgb(0, 171, 85)" />
                </Grid>
            </Grid>
        )
    }

    renderForgotPasswordLink = () => {
        return (
            <div className = 'forgot-password-root'>
                <a href = "/" className = 'forgot-password-link'> Forgot password?</a>
            </div>
        )
    }

    renderPasswordField = (name, label, placeholder) => {
        const {showPassword, passwordType} = this.state
        const values = {name, label, placeholder, value: this.state[name], showPassword, passwordType}
        return (
            <div className = "signin_form-input_wrapper">
                <PasswordField 
                    values = {values}
                    handleOnChange = {this.handleInputOnChange}
                    handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                />
            </div>
        )
    }

    renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {this.state[name]}
                    handleOnChange = {this.handleInputOnChange}
                />
            </div>
        )
    }

    renderHeader = () => {
        return (
            <div className = 'sign-form_header'>
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'sign-form_header_wel'>
                            <span className = "signin-form_title">Welcome to Swapee</span>
                            <span className = "signin-form_des">Sign in to manage your account.</span>
                        </div>
                    </Grid>
                    <Grid item xs = {2} sm = {2} md = {1}>
                        <LogoComponent textColor = "text.secondary" position = "end" />
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderForm = () => {
        return (
            <div className = 'sign-form'>
                { this.renderHeader() }
                <div className = 'sign-form-input-container'>
                    { this.renderInputField("email", "Email", "Email address") }
                    { this.renderPasswordField("password", "Password", "Password") }
                    { this.renderForgotPasswordLink() }
                    { this.renderButtonFooter() }
                </div>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {6} />
                <Grid item xs = {12} sm = {8} md = {6}>
                    <Box sx = {{my: 3, mx: 4, display: 'flex', flexDirection: 'column'}}>
                        { this.renderForm() }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    render() {
        return (
            <div className = 'signin-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default SignIn