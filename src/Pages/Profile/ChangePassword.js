import React from 'react'

import {Grid} from '@mui/material'

import InputField from '../../Components/Input/InputField'
import PasswordField from '../../Components/Input/PasswordField'
import UpdateButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'

import './Profile.css'

const ChangePassword = ({
    state, 
    handleInputOnChange, 
    handleCancelOnClick, 
    handleSubmitOnClick,
    handleShowPasswordOnClick
}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <UpdateButtonWidget 
                        name = "Update" 
                        background = "rgb(0, 171, 85)"
                        onClick = {handleSubmitOnClick}    
                    />
                </Grid>
            </Grid>
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

    const renderEditForm = () => (
        <div className = 'personal-info-edit-form-block'>
            { renderInputField("currentPassword", "Current Password", "Current Password") }
            { renderInputField("newPassword", "New Password", "New Password") }
            { renderPasswordField("confirmPassword", "Confirm Password", "Confirm Password") }
            { renderButtonFooter() }
        </div>
    )

    return (
        <div className = 'profile-page-personal-info-edit'>
            <h4>Change Password</h4>
            { renderEditForm() }
        </div>
    )
}

export default ChangePassword