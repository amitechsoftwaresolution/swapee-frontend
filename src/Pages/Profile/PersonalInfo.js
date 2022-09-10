import React from 'react'

import {Avatar} from '@mui/material'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined'

import './Profile.css'

const PersonalInfo = ({profileImage}) => {
    const ICONS = {
        "Username": <PersonOutlinedIcon sx = {{width: "18px", height: "18px"}}/>,
        "Email": <EmailIcon sx = {{width: "18px", height: "18px"}}/>,
        "Location": <FmdGoodOutlinedIcon sx = {{width: "18px", height: "18px"}}/>,
        "Phone": <PhoneEnabledOutlinedIcon sx = {{width: "18px", height: "18px"}}/>
    }

    const renderInfoContent = (label, value) => (
        <div className = 'pro-personal-info-content-root'>
            <div className = 'pro-personal-info-content-label'>
                {ICONS[label]}
                <p>{label}</p>
            </div>
            <span>{value}</span>
        </div>
    )

    const renderPersonalInfoContents = () => (
        <div className = 'pro-personal-info-contents'>
            { renderInfoContent("Username", "Chris Evans") }
            { renderInfoContent("Email", "Chris@sample.com") }
            { renderInfoContent("Location", "Brooklyn") }
            { renderInfoContent("Phone", "+94 99999999") }
        </div>
    )

    const renderPersonalInfoHeader = () => (
        <div className = 'pro-personal-info-header'>
            <div className = 'personal-info-header-avatar-block'>
                <Avatar alt = "user-avatar" src = {profileImage} />
                <span>Chris Evans</span>
            </div>
            <div className = 'personal-info-header-upload'>
                <span className = 'upload-pro-image-btn'>Upload</span>
            </div>
        </div>
    )

    return (
        <div className = 'profile-page-personal-info-root'>
            { renderPersonalInfoHeader() }
            { renderPersonalInfoContents() }
        </div>
    )
}

export default PersonalInfo