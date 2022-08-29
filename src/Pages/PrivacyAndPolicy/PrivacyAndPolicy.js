import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ContentLeft from '../../Components/ContentInfo/ContentLeft'

import './PrivacyAndPolicy.css'
import privacyAndPolicy from '../../Data/Json/privacyPolicy.json'
import privacyPolicyImg from '../../Assets/Images/aboutus01.jfif'

class PrivacyAndPolicy extends Component {
    breadcrumbs = ["Home", "Help", "Privacy & Policy"]

    renderContentLeft = () => {
        return (
            <ContentLeft title = "Privacy & Policy" src = {privacyPolicyImg}>
                { privacyAndPolicy.contents.map((item, idx) => {
                    return <p className = 'privacy-policy-intro-des' key = {idx}>{item}</p>
                }) }
            </ContentLeft>
        )
    }

    renderContents = () => {
        return (
            <div className = 'privacy-policy-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <div className = 'privacy-policy-intro-container'>
                    { this.renderContentLeft() } 
                </div>
            </div>
        )
    }

    renderHeaderParallax = () => {
        return (
            <div className = 'privacy-policy-header-parallax'>
                <span className = 'header-parallax-title'>Privacy & Policy</span>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'privacy-policy-main-container'>
                { this.renderHeaderParallax() }
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'privacy-policy-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default PrivacyAndPolicy