import React, { Component } from 'react'

import {connect} from 'react-redux'

import {Grid} from '@mui/material'

import SignInForm from './SignInForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'

import { storeLoginResponse } from '../../redux/actions/authAction'
// import { signIn } from '../../Api/authentication'

import './SignIn.css'
import loginCoverImage from '../../Assets/Images/Auth/login.png'

import { logInWithEmailAndPassword, signInWithGoogle, signInWithFacebook } from "../../Firebase/firebase";

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

    handleSignInApi = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await logInWithEmailAndPassword(data.email, data.password)
            if (response !== null && !response.success) {
                this.setErrorSnackBar(response.message)
            } else {
                const { uid, email, displayName } = response
                const loginResponse = { uid, email, name: displayName }
                this.props.storeLoginResponse(loginResponse)
                this.setSuccessSnackBar("You successfully logged in")
            }
            this.setState({ loading: false, email: "", password: "", passwordType: "password" })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    FacebookLoginOnClick = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await signInWithFacebook(data.email, data.password)
            if (response !== null && !response.success) {
                this.setErrorSnackBar(response.message)
                console.log(response.message)
            } else {
                const { uid, email, displayName } = response
                const loginResponse = { uid, email, name: displayName }
                this.props.storeLoginResponse(loginResponse)
                this.setSuccessSnackBar("You successfully logged in")
            }
            this.setState({ loading: false, email: "", password: "", passwordType: "password" })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    googleLoginOnClick = async(data) => {
        try {
            this.setState({ loading: true })
            const response = await signInWithGoogle(data.email, data.password)
            if (response !== null && !response.success) {
                this.setErrorSnackBar(response.message)
            } else {
                const { uid, email, displayName } = response
                const loginResponse = { uid, email, name: displayName }
                this.props.storeLoginResponse(loginResponse)
                this.setSuccessSnackBar("You successfully logged in")
            }
            this.setState({ loading: false, email: "", password: "", passwordType: "password" })
        } catch (e) {
            this.setState({ loading: false })
            this.setErrorSnackBar(e.response.data.message)
        }
    }

    handleLoginOnClick = () => {
        const {email, password} = this.state
        if (email && password) {
            const result = this.validateEmail(email)
            if (!result) {
                this.setErrorSnackBar('Enter a valid email address')
            }
            else {
                const data = {email, password}
                this.handleSignInApi(data)
            }
        }
        else {
            this.setErrorSnackBar('Fields cannot be empty' )
        }
    }

    handleCancelOnClick = () => {
        this.setState({email: "", password: ""})
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

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    setSuccessSnackBar = (message) => {
        this.setSnackBar("success", message, true)
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
                    backgroundImage: `url(${loginCoverImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs = {false} sm = {false} md = {1}/>
                <Grid item xs = {12} sm = {8} md = {5} sx = {{padding: "15px"}}>
                    <SignInForm 
                        state = {this.state} 
                        handleInputOnChange = {this.handleInputOnChange}
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleLoginOnClick = {this.handleLoginOnClick}
                        googleLoginOnClick = {this.googleLoginOnClick}
                        FacebookLoginOnClick = {this.FacebookLoginOnClick}
                    />
                </Grid>
                <Grid item xs = {false} sm = {false} md = {1}/>
            </Grid>
        )
    }

    render() {
        const {openSnackBar, loading} = this.state
        return (
            <div className = 'signin-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeLoginResponse: data => { dispatch(storeLoginResponse(data)) }
    }
}

export default connect(null, mapDispatchToProps)(SignIn)