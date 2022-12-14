import React from "react"

import {Grid, Box} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignUpButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'
import SocialButton from '../../Components/Button/SocialButton'

import paths from '../../Data/Json/paths.json'

import './SignUp.css'

const SignUpForm = ({state, handleInputOnChange, handleShowPasswordOnClick, handleCancelOnClick, handleSignUpOnClick}) => {

    const renderSocialLoginContainer = () => {
        return (
            <div className = 'social-login-root'>
                <span className = "social-login-txt1">Or Signup with</span>
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
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignUpButtonWidget 
                        name = "Sign Up" 
                        background = "#31e2f2"
                        onClick = {handleSignUpOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderTermsAndConditionsLink = () => {
        return (
            <div className = 'terms-conditions-root'>
                <a href = {paths.TermsAndConditions} className = 'terms-conditions-link'>Terms & Conditions</a>
            </div>
        )
    }

    const renderPasswordField = (name, label, placeholder) => {
        const {showPassword, showConfirmPassword, passwordType, confirmPasswordType} = state
        let values = {name, label, placeholder, value: state[name]}
        if (name === "password") {
            values = {...values, showPassword, passwordType}
        } else {
            values = {...values, showPassword: showConfirmPassword, passwordType: confirmPasswordType}
        }
        return (
            <div className = "signup_form-input_wrapper">
                <PasswordField 
                    values = {values}
                    handleOnChange = {handleInputOnChange}
                    handleShowPasswordOnClick = {() => handleShowPasswordOnClick(name)}
                />
            </div>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signup_form-input_wrapper">
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

    const renderSignInLink = () => {
        return (
            <div className = 'signin-link-root'>
                <p className = 'signin-link-para'>
                    Already have an account ?
                    <a href = {paths.SignIn} className = 'signin-link'>Sign In</a>
                </p>
            </div>
        )
    }

    const renderHeader = () => {
        return (
            <div className = 'sign-form_header'>
                { renderSignInLink() }
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'sign-form_header_wel'>
                            <span className = "signup-form_title ">Welcome to Swapee</span>
                            <span className = "signup-form_des">Sign up to explore more on swapee.</span>
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
        <Box sx = {{my: 2, display: 'flex', flexDirection: 'column'}}>
            <div className = 'signup-form'>
                { renderHeader() }
                <div className = 'sign-form-input-container'>
                    { renderInputField("name", "Name", "Name") }
                    { renderInputField("email", "Email", "Email address") }
                    { renderPasswordField("password", "Password", "Password") }
                    { renderPasswordField("confirmPassword", "Confirm Password", "Confirm Password") }
                    { renderTermsAndConditionsLink() }
                    { renderButtonFooter() }
                    { renderSocialLoginContainer() }
                </div>
            </div>
        </Box>
    )
}

export default SignUpForm