import React from "react"

import {Grid, Box} from '@mui/material'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import PasswordlIcon from '@mui/icons-material/Password'

import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import SubmitButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/CancelButton'
import LogoComponent from '../../Components/Logo/LogoComponent'
import StepperComponent from "../../Components/Stepper/StepperComponent"

const ForgotPasswordForm = ({
    state, 
    handleInputOnChange, 
    handleCancelOnClick, 
    handleShowPasswordOnClick,
    handleNextOnClick
}) => {
    const {activeStep, showPassword, showConfirmPassword, passwordType, confirmPasswordType} = state

    const steps = ['Provide email address', 'Enter reset code', 'Reset new password']

    const icons = {
        1: <MarkEmailReadIcon />,
        2: <VpnKeyIcon />,
        3: <PasswordlIcon />
    }

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "30px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <SubmitButtonWidget 
                        name = {activeStep === 2 ? "Submit" : "Next"} 
                        background = "rgb(0, 171, 85)"
                        onClick = {handleNextOnClick}    
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

    const renderPasswordField = (name, label, placeholder) => {
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

    const renderResetPasswordStep = () => (
        <>
            { renderPasswordField("password", "Password", "Password") }
            { renderPasswordField("confirmPassword", "Confirm Password", "Confirm Password") }
        </>
    )

    const renderResetCodeStep = () => (
        <>
            { renderInputField("resetCode", "Reset Code", "Reset Code") }
        </>
    )

    const renderEmailStep = () => (
        <>
            { renderInputField("email", "Email", "Email") }
        </>
    )

    const renderStepper = () => (
        <div className = "stepper-root">
            <StepperComponent 
                activeStep = {activeStep}
                steps = {steps}
                icons = {icons}
            />
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
                            <span className = "forgotpassword-form_des">Don’t worry please follow this steps to reset your password</span>
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
                { renderStepper() }
                <div className = 'sign-form-input-container'>
                    {
                        activeStep === 0 ?
                        renderEmailStep()
                        :
                        activeStep === 1 ?
                        renderResetCodeStep() 
                        :
                        renderResetPasswordStep()
                    }
                    { renderButtonFooter() }
                </div>
            </div>
        </Box>
    )
}

export default ForgotPasswordForm