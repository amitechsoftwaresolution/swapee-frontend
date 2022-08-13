import React, { Component } from 'react'

import {Grid, CssBaseline, Box} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignInButtonWidget from '../../Components/Widgets/SignInButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'
import SocialButton from '../../Components/Button/SocialButton'

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

    renderSocialLoginContainer = () => {
        return (
            <div className = 'social-login-root'>
                <span className = "social-login-txt1">Or login with</span>
                <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <SocialButton label = "Facebook" icon = {FacebookIcon}/>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <SocialButton label = "Google" icon = {GoogleIcon}/>
                    </Grid>
                </Grid>
            </div>
        )
    }

    renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
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
                <a href = "/" className = 'forgot-password-link'>Forgot password?</a>
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

    renderSignUpLink = () => {
        return (
            <div className = 'signup-link-root'>
                <p className = 'signup-link-para'>
                    Don’t have an account?
                    <a href = "/" className = 'signup-link'>Get Started</a>
                </p>
            </div>
        )
    }

    renderHeader = () => {
        return (
            <div className = 'sign-form_header'>
                { this.renderSignUpLink() }
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'sign-form_header_wel'>
                            <span className = "signin-form_title">Welcome to Swapee</span>
                            <span className = "signin-form_des">Sign in to manage your account.</span>
                        </div>
                    </Grid>
                    <Grid item xs = {2} sm = {2} md = {1}>
                        <LogoComponent textColor = "primary" position = "end" />
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
                    { this.renderSocialLoginContainer() }
                </div>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <CssBaseline />
                <Grid item xs = {false} sm = {4} md = {7} sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {12} sm = {8} md = {5}>
                    <Box sx = {{my: 1, mx: 4, display: 'flex', flexDirection: 'column'}}>
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