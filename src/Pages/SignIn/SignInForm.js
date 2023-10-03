import React from "react"

import {Grid, Box} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignInButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'
import SocialButton from '../../Components/Button/SocialButton'

import paths from '../../Data/Json/paths.json'

import './SignIn.css'

const SignInForm = ({state, handleInputOnChange, handleShowPasswordOnClick, handleCancelOnClick, handleLoginOnClick, googleLoginOnClick}) => {

    const renderSocialLoginContainer = () => {
        return (
            <div className = 'social-login-root'>
                <span className = "social-login-txt1">Or login with</span>
                <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <SocialButton label = "Facebook" icon = {FacebookIcon}/>
                    </Grid>
                    <Grid item xs = {12} sm = {6} md = {6}>
                        <SocialButton  onClick = {googleLoginOnClick} label = "Google" icon = {GoogleIcon}/>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignInButtonWidget 
                        name = "Sign In" 
                        background = "#31e2f2"
                        onClick = {handleLoginOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderForgotPasswordLink = () => {
        return (
            <div className = 'forgot-password-root'>
                <a href = {paths.ForgotPassword} className = 'forgot-password-link'>Forgot password?</a>
            </div>
        )
    }

    const renderPasswordField = (name, label, placeholder) => {
        const {showPassword, passwordType} = state
        const values = {name, label, placeholder, value: state[name], showPassword, passwordType}
        return (
            <div className = "signin_form-input_wrapper">
                <PasswordField 
                    values = {values}
                    handleOnChange = {handleInputOnChange}
                    handleShowPasswordOnClick = {handleShowPasswordOnClick}
                />
            </div>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {state[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderSignUpLink = () => {
        return (
            <div className = 'signup-link-root'>
                <p className = 'signup-link-para'>
                    Don’t have an account ?
                    <a href = {paths.SignUp} className = 'signup-link'>Get Started</a>
                </p>
            </div>
        )
    }

    const renderHeader = () => {
        return (
            <div className = 'sign-form_header'>
                { renderSignUpLink() }
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'sign-form_header_wel'>
                            <span className = "signin-form_title">Welcome to Swapee</span>
                            <span className = "signin-form_des">Sign in to manage your account.</span>
                        </div>
                    </Grid>
                    <Grid item xs = {2} sm = {2} md = {1}>
                        <LogoComponent position = "end" />
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Box sx = {{my: 2, display: 'flex', flexDirection: 'column'}}>
            <div className = 'signin-form'>
                { renderHeader() }
                <div className = 'sign-form-input-container'>
                    { renderInputField("email", "Email", "Email address") }
                    { renderPasswordField("password", "Password", "Password") }
                    { renderForgotPasswordLink() }
                    { renderButtonFooter() }
                    { renderSocialLoginContainer() }
                </div>
            </div>
        </Box>
    )
}

export default SignInForm