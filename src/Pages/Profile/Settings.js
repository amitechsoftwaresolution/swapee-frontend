import React from 'react'

import {Grid} from '@mui/material'

import SwitchInput from '../../Components/Switch/SwitchInput'
import UpdateButtonWidget from '../../Components/Widgets/ButtonWidget'
import CancelButton from '../../Components/Button/SecodaryButtonWidget'

import './Profile.css'

const Settings = ({state, handleClearOnClick, handleSubmitOnClick}) => {

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <CancelButton onClick = {handleClearOnClick} name = "Clear" />
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

    const renderEditNotification = () => (
        <div className = 'personal-info-edit-form-block'>
            <SwitchInput label = "News about PCT-themes products and feature updates"/>
            <SwitchInput label = "Tips and Document business products"/>
        </div>
    )

    const renderEditEmailSettings = () => (
        <div className = 'personal-info-edit-form-block'>
            <SwitchInput label = "On new product added"/>
            <SwitchInput label = "Upon new order"/>
            <SwitchInput label = "News about products and other services"/>
        </div>
    )

    return (
        <div className = 'profile-page-personal-info-edit'>
            <h4>Email Settings</h4>
            { renderEditEmailSettings() }
            <h4>Notification Settings</h4>
            { renderEditNotification() }
            { renderButtonFooter() }
        </div>
    )
}

export default Settings