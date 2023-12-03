import React, { Component } from 'react'
import {Grid} from '@mui/material'
import SignUpForm from './SignUpForm'
import SnackBarAlert from '../../Components/SnackBarAlert/SnackBarAlert'
import Loading from '../../Components/Loading/Loading'
import paths from '../../Data/Json/paths.json'
import './SignUp.css'
import signupCoverImage from '../../Assets/Images/Auth/signup.png'
import { registerWithEmailAndPassword, sendPasswordReset, signInWithGoogle } from "../../Firebase/firebase";
import { storeLoginResponse } from '../../redux/actions/authAction'
import {connect} from 'react-redux'
import AlertModel from "../../Components/Popup/AlertModel"

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
        severity: "",
        openSnackBar: false,
        loading: false,
        showPassword: false,
        showConfirmPassword: false,
        passwordType: "password",
        confirmPasswordType: "password",
        role: "",
        isNeedSocialLogins: false,
        openGoogleConformationpopup: false
    }

    googleLoginOnClick = async() => {
        try {
            this.setState({ loading: true,  openGoogleConformationpopup: false})
            const response = await signInWithGoogle()
            if (response !== null && !response.success) {
                this.setErrorSnackBar(response.message)
                this.setState({ loading: false})
            } else {
                const { uid, email, displayName } = response
                const loginResponse = { uid, email, name: displayName }
                this.props.storeLoginResponse(loginResponse)
                this.setSuccessSnackBar("You successfully logged in")
                this.setState({ loading: false, email: "", password: "", role: "", passwordType: "password" })

                const delay = 4000;
                setTimeout(() => {
                    window.location.href = paths.Home;
                }, delay);
            }
        } catch (e) {
            this.setState({ loading: false })
            console.log(e)
            this.setErrorSnackBar(e.response.data.message)
        }
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
            this.setSuccessSnackBar('Password reset link sent to your email, valid for one hour.')

            const delay = 4000;
            setTimeout(() => {
                window.location.href = paths.SignIn;
            }, delay);
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

    handleShowPasswordOnClick = (name) => {
        const {showPassword, showConfirmPassword} = this.state

        if (name === "password") {
            let passwordType = showPassword ? "password" : "text"
            this.setState({ showPassword: !showPassword, passwordType })
        }
        else {
            let confirmPasswordType = showConfirmPassword ? "password" : "text"
            this.setState({ showConfirmPassword: !showConfirmPassword, confirmPasswordType })
        }
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target;

        const status = value !== "vendor"

        this.setState({[name]: value, isNeedSocialLogins: status})
    }

    handleSnackBarClose = () => {
        this.setSnackBar("", null, false)
    }

    handleGoogleConformationModel = () => {
        this.setState({openGoogleConformationpopup: !this.state.openGoogleConformationpopup})
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

    validatePassword = (password, confirmPassword) => {
        return password === confirmPassword
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
                        handleShowPasswordOnClick = {this.handleShowPasswordOnClick}
                        handleCancelOnClick = {this.handleCancelOnClick}
                        handleSignUpOnClick = {this.handleSignUpOnClick}
                        googleLoginOnClick = {this.handleGoogleConformationModel}
                        isNeedSocialLogins = {this.state.isNeedSocialLogins}
                    />
                </Grid>
                <Grid item xs = {false} sm = {false} md = {1}/>
            </Grid>
        )
    }

    render() {
        const {openSnackBar, loading, openGoogleConformationpopup} = this.state
        return (
            <div className = 'signup-page-root'>
                { this.renderMainContainer() }
                { openSnackBar && this.renderSnackBar() }
                { loading && <Loading open = {loading} /> }
                <AlertModel
                    title = "Alert!"
                    content = "If you proceed, you will no longer be able to log in as a vendor. This action is irreversible and will restrict your account to viewer access only."
                    cancelLabel= 'Cancel'
                    proceedLabel= 'Continue'
                    open = {openGoogleConformationpopup} 
                    handleClose = {this.handleGoogleConformationModel}
                    handleCancelOnClick = {this.handleGoogleConformationModel}
                    handleSubmitOnClick = {this.googleLoginOnClick}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeLoginResponse: data => { dispatch(storeLoginResponse(data)) }
    }
}

export default connect(null, mapDispatchToProps)(SignUp)