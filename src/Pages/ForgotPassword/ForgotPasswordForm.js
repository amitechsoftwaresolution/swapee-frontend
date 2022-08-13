import React from "react"

import {Grid, Box} from '@mui/material'

import InputField from '../../Components/Input/InputField'
import SubmitButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'

import LogoComponent from '../../Components/Logo/LogoComponent'

const ForgotPasswordForm = ({state, handleInputOnChange, handleCancelOnClick, handleSubmitOnClick}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "30px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SubmitButtonWidget 
                        name = "Submit" 
                        background = "rgb(0, 171, 85)"
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
                    Already reset your password ?
                    <a href = "/signin" className = 'signin-link'>Sign In</a>
                </p>
            </div>
        )
    }

    const renderHeader = () => {
        return (
            <div className = 'forgotpassword-form_header'>
                { renderSignInLink() }
                <Grid container>
                    <Grid item xs = {10} sm = {10} md = {11}>
                        <div className = 'forgotpassword-form_header_wel'>
                            <span className = "forgotpassword-form_title">Forgot your password ?</span>
                            <span className = "forgotpassword-form_des">Don’t worry let us know your email</span>
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
                <div className = 'sign-form-input-container'>
                    { renderInputField("email", "Email", "Email") }
                    { renderButtonFooter() }
                </div>
            </div>
        </Box>
    )
}

export default ForgotPasswordForm