import React, { useEffect, useState } from "react"

import {Grid, Box} from '@mui/material'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SignUpButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'

import './SignUp.css'

const SignUpForm = ({state, handleInputOnChange, handleShowPasswordOnClick, handleCancelOnClick, handleSignUpOnClick}) => {
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

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SignUpButtonWidget 
                        name = "Sign Up" 
                        background = "rgb(0, 171, 85)"
                        onClick = {handleSignUpOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderTermsAndConditionsLink = () => {
        return (
            <div className = 'terms-conditions-root'>
                <a href = "/" className = 'terms-conditions-link'>Terms & Conditions</a>
            </div>
        )
    }

    const renderPasswordField = (name, label, placeholder) => {
        const {showPassword, passwordType} = state
        const values = {name, label, placeholder, value: state[name], showPassword, passwordType}
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
                    <a href = "/" className = 'signin-link'>Sign In</a>
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
        <Box sx = {{my: 2, mx: mx, display: 'flex', flexDirection: 'column'}}>
            <div className = 'sign-form'>
                { renderHeader() }
                <div className = 'sign-form-input-container'>
                    { renderInputField("name", "Name", "Name") }
                    { renderInputField("email", "Email", "Email address") }
                    { renderPasswordField("password", "Password", "Password") }
                    { renderPasswordField("confirmPassword", "Confirm Password", "Confirm Password") }
                    { renderTermsAndConditionsLink() }
                    { renderButtonFooter() }
                </div>
            </div>
        </Box>
    )
}

export default SignUpForm