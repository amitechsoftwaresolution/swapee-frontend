import React from 'react'

import {Grid, Tabs, Tab} from '@mui/material'

import './Profile.css'
import storeCoverImage from '../../Assets/Images/storeCoverImage.jpg'
import profileImage from '../../Assets/Images/prod2.jpg'

const ProfilePageCover = ({value, handleChange}) => {

    const renderTab = (label) => (
        <Tab label = {label} sx = {{fontSize: "0.75rem"}}/>
    )

    const renderCoverInfo = () => (
        <Grid container spacing = {1}>
            <Grid item xs = {12} sm = {3} md = {2}>
                <div className = "profile-page-cover-info-avatar-root">
                    <img src = {profileImage} alt = "store" />
                </div>
            </Grid>
            <Grid item xs = {12} sm = {9} md = {10}>
                <Tabs value = {value} onChange={handleChange} aria-label="basic tabs example">
                    { renderTab("Personal") }
                    { renderTab("Change Password") }
                    { renderTab("Settings") }
                </Tabs>
            </Grid>
        </Grid>
    )

    const renderCoverImage = () => (
        <div className = "profile-page-cover-image-root">
            <img src = {storeCoverImage} alt = "profile-cover" />
            { renderCoverInfo() }
        </div>
    )

    return (
        <div className = "profile-page-cover-root">
            <div className = "profile-page-cover-con">
                { renderCoverImage() }
            </div>
        </div>
    )
}

export default ProfilePageCover