import React, { useEffect, useState } from "react"

import {Grid, Box} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignInButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'
import SocialButton from '../../Components/Button/SocialButton'

import './SignIn.css'

const SignInForm = ({state, handleInputOnChange, handleShowPasswordOnClick, handleCancelOnClick, handleLoginOnClick}) => {
    const [mx, setMarginX] = useState(10)

    useEffect(() => {
        window.addEventListener('resize', setPropertiesWithScreenSize)
    }, [])

    const setPropertiesWithScreenSize = () => {
        if (window.innerWidth >= 1300) {
            setMarginX(10)
        }
        else if (window.innerWidth >= 1200) {
            setMarginX(8)
        }
        else if (window.innerWidth >= 950) {
            setMarginX(6)
        }
        else if (window.innerWidth >= 750) {
            setMarginX(4)
        }
        else if (window.innerWidth >= 600) {
            setMarginX(3)
        }
        else if (window.innerWidth >= 400) {
            setMarginX(1)
        }
        else {
            setMarginX(0)
        }
    }

    const renderSocialLoginContainer = () => {
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

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignInButtonWidget 
                        name = "Sign In" 
                        background = "rgb(0, 171, 85)"
                        onClick = {handleLoginOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderForgotPasswordLink = () => {
        return (
            <div className = 'forgot-password-root'>
                <a href = "/" className = 'forgot-password-link'>Forgot password?</a>
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
                    <a href = "/" className = 'signup-link'>Get Started</a>
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
                        <LogoComponent textColor = "primary" position = "end" />
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Box sx = {{my: 2, mx: mx, display: 'flex', flexDirection: 'column'}}>
            <div className = 'sign-form'>
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