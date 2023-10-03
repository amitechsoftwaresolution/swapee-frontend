import React from "react"

import {Grid, Box} from '@mui/material'

import LogoComponent from '../../Components/Logo/LogoComponent'
import InputField from '../../Components/Input/InputField'
import SignUpButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'
import SelectField from '../../Components/Input/SelectField'

import paths from '../../Data/Json/paths.json'

import './SignUp.css'

const SignUpForm = ({state, handleInputOnChange, handleCancelOnClick, handleSignUpOnClick}) => {

    const renderSelectDropDown = (name, label, placeholder, menuItems) => {
        return (
            <div className = "signup_form-input_wrapper">
                <SelectField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {state[name]}
                    items = {menuItems}
                    handleOnChange = {handleInputOnChange}
                />
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
                    { renderSelectDropDown("role", "Register as", "Register as", ['vendor', 'viewer']) }
                    { renderTermsAndConditionsLink() }
                    { renderButtonFooter() }
                </div>
            </div>
        </Box>
    )
}

export default SignUpForm