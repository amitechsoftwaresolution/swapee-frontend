import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageTop from '../../Components/PageTop/PageTop'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

import './AboutUs.css'
import aboutUs from '../../Data/Json/aboutUs.json'
import aboutus01 from '../../Assets/Images/aboutus01.jfif'
import aboutus02 from '../../Assets/Images/aboutus02.jfif'

class AboutUs extends Component {
    breadcrumbs = ["Home", "Help", "About Us"]

    renderContentLeft = () => {
        return (
            <ContentLeft title = "Our Story" src = {aboutus01}>
                { aboutUs.intro_contents.map((item, idx) => {
                    return <p className = 'about-us-intro-des' key = {idx}>{item}</p>
                }) }
            </ContentLeft>
        )
    }

    renderContentRight = () => {
        return (
            <ContentRight title = "Our Mission" src = {aboutus02}>
                <p className = 'about-us-intro-des'>{aboutUs.mission_content}</p>
                <div className = "miss-sub-content">
                    <p className = "miss-sub-content-1">{aboutUs.mission_sub_contents[0]}</p>
                    <span className = "miss-sub-content-2">{aboutUs.mission_sub_contents[1]}</span>
                </div>
            </ContentRight>
        )
    }

    renderContents = () => {
        return (
            <div className = 'about-us-main-contents'>
                <div className = 'about-us-intro-container'>
                    { this.renderContentLeft() } 
                </div>
                <div className = 'about-us-mission-container'>
                    { this.renderContentRight() }
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