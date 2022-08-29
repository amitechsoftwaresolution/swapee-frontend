import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ContentLeft from '../../Components/ContentInfo/ContentLeft'

import './TermsAndConditions.css'
import termsNcondition from '../../Data/Json/termsNcondition.json'
import termsNconditionImg from '../../Assets/Images/aboutus01.jfif'

class TermsAndConditions extends Component {
    breadcrumbs = ["Home", "Help", "Terms & Conditions"]

    renderContentLeft = () => {
        return (
            <ContentLeft title = "Terms & Conditions" src = {termsNconditionImg}>
                { termsNcondition.contents.map((item, idx) => {
                    return <p className = 'terms-intro-des' key = {idx}>{item}</p>
                }) }
            </ContentLeft>
        )
    }

    renderContents = () => {
        return (
            <div className = 'terms-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <div className = 'terms-intro-container'>
                    { this.renderContentLeft() } 
                </div>
            </div>
        )
    }

    renderHeaderParallax = () => {
        return (
            <div className = 'terms-header-parallax'>
                <span className = 'header-parallax-title'>Terms & Conditions</span>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'terms-main-container'>
                { this.renderHeaderParallax() }
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'terms-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default TermsAndConditions