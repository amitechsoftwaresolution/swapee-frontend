import React, { Component } from 'react'

import {Grid} from '@mui/material'

import SignUpForm from './SignUpForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import './SignUp.css'
import signupCoverImage from '../../Assets/Images/Auth/signup.png'
import { registerWithEmailAndPassword, sendPasswordReset } from "../../Firebase/firebase";

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        role: ""
    }

    handleSignUpApi = async(data) => {
        try {
            this.setState({ loading: true })
            const randomValue = this.generateRandomAlphaNumeric(8);
            await registerWithEmailAndPassword(data.name, data.email, randomValue)
            await sendPasswordReset(data.email)
            this.setState({ 
                loading: false,
                name: "",
                email: "", 
                role: '',
                message: null
            })
            this.setSuccessSnackBar('Password reset link sent to your email')            
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleSignUpOnClick = () => {
        const {name, email, role} = this.state
        if (name && email && role) {
            const result = this.validateEmail(email)

            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {name, email, role}
                this.handleSignUpApi(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty')
        }
    }

    generateRandomAlphaNumeric(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charsetLength = charset.length;
        
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charsetLength);
          result += charset.charAt(randomIndex);
        }
        
        return result;
    }

    handleCancelOnClick = () => {
        this.setState({
            name: "",
            email: "",
            role: ""
        })
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
    }

    setWarningSnackBar = (message) => {
        this.setSnackBar("warning", message, true)
    }

    setErrorSnackBar = (message) => {
        this.setSnackBar("error", message, true)
    }

    setSnackBar = (severity, message, openSnackBar) => {
        this.setState({ severity, message, openSnackBar })
    }

    validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    renderSnackBar = () => {
        const {openSnackBar, severity, message} = this.state
        return (
            <SnackBarAlert 
                open = {openSnackBar} 
                severity = {severity} 
                message = {message} 
                handleClose = {this.handleSnackBarClose}
            />
        )
    }

    renderMainContainer = () => {
        return (
            <Grid container component = "main">
                <Grid item xs = {false} sm = {4} md = {5} sx = {{
                    backgroundImage: `url(${signupCoverImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {false} sm = {false} md = {1}/>
                <Grid item xs = {12} sm = {8} md = {5} sx = {{padding: "15px"}}>
                    <SignUpForm 
                        state = {this.state} 
                        handleInputOnChange = {this.handleInputOnChange}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleSignUpOnClick = {this.handleSignUpOnClick}
                    />
                </Grid>
                <Grid item xs = {false} sm = {false} md = {1}/>
            </Grid>
        )
    }

    render() {
        const {openSnackBar, loading} = this.state
        return (
            <div className = 'signup-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default SignUp