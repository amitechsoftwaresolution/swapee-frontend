import React from 'react'

import {Grid} from '@mui/material'

import InputField from '../../Components/Input/InputField'
import UpdateButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'

import './Profile.css'
import { primaryColor } from '../../Data/Values/Values'

const EditPersonal = ({state, handleInputOnChange, handleCancelOnClick, handleSubmitOnClick}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleCancelOnClick} name = "Cancel" />
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <UpdateButtonWidget 
                        name = "Update" 
                        background = {primaryColor}
                        onClick = {handleSubmitOnClick}    
                    />
                </Grid>
            </Grid>
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
            { renderInputField("username", "Username", "Username") }
            { renderInputField("email", "Email", "Email") }
            { renderInputField("location", "Location", "Location") }
            { renderInputField("contact", "Contact", "Contact") }
            { renderButtonFooter() }
        </div>
    )

    return (
        <div className = 'profile-page-personal-info-edit'>
            <h4>Personal Information</h4>
            { renderEditForm() }
        </div>
    )
}

export default EditPersonal