import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageTop from '../../Components/PageTop/PageTop'
import ContentRight from './ContentLeft'
import ContentLeft from './ContentRight'

import './AboutUs.css'
import aboutUs from '../../Data/Json/aboutUs.json'

class AboutUs extends Component {
    breadcrumbs = ["Home", "Help", "About Us"]

    renderContentRight = () => {
        return (
            <ContentRight title = "Our Story">
                { aboutUs.intro_contents.map((item, idx) => {
                    return <p className = 'about-us-intro-des' key = {idx}>{item}</p>
                }) }
            </ContentRight>
        )
    }

    renderContentLeft = () => {
        return (
            <ContentLeft title = "Our Mission">
                <p className = 'about-us-intro-des'>{aboutUs.mission_content}</p>
                <div className = "miss-sub-content">
                    <p className = "miss-sub-content-1">{aboutUs.mission_sub_contents[0]}</p>
                    <span className = "miss-sub-content-2">{aboutUs.mission_sub_contents[1]}</span>
                </div>
            </ContentLeft>
        )
    }

    renderContents = () => {
        return (
            <div className = 'about-us-main-contents'>
                <div className = 'about-us-intro-container'> 
                    { this.renderContentRight() }
                </div>
                <div className = 'about-us-mission-container'>
                    { this.renderContentLeft() }
                </div>
            </div>
        )
    }

    renderHeaderParallax = () => {
        return (
            <div className = 'header-parallax'>
                <span className = 'header-parallax-title'>About Us</span>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'about-us-main-container'>
                { this.renderHeaderParallax() }
                <PageTop breadcrumbs = {this.breadcrumbs} />
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'about-us-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default AboutUs