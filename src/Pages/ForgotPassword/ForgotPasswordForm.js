import React from "react"

import {Grid, Box} from '@mui/material'

import InputField from '../../Components/Input/InputField'
import SubmitButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'
import LogoComponent from '../../Components/Logo/LogoComponent'

import paths from '../../Data/Json/paths.json'

import './ForgotPassword.css'

const ForgotPasswordForm = ({
    email,
    handleInputOnChange, 
    handleCancelOnClick,
    handleSubmitOnClick
}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "30px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SubmitButtonWidget 
                        name = "Submit"
                        background = "#31e2f2"
                        onClick = {handleSubmitOnClick}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signup_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {email}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderSignInLink = () => {
        return (
            <div className = 'signin-link-root'>
                <p className = 'signin-link-para'>
                    Already reset your password ?
                    <a href = {paths.SignIn} className = 'signin-link'>Sign In</a>
                </p>
            </div>
        )
    }

    const renderEmailStep = () => (
        <div className = "stepper-des">
            <p className = "stepper-des_span">Let us know your email address, and we'll send a reset code</p>
            { renderInputField("email", "Email", "Email") }
        </div>
    )

    const renderHeader = () => {
        return (
            <div className = 'forgotpassword-form_header'>
                { renderSignInLink() }
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'forgotpassword-form_header_wel'>
                            <span className = "forgotpassword-form_title">Forgot your password ?</span>
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
            <div className = "forgot-password-form">
                { renderHeader() }
                <div className = 'forgetpassword-form-input-container'>
                    { renderEmailStep() }
                    { renderButtonFooter() }
                </div>
            </div>
        </Box>
    )
}

export default ForgotPasswordForm