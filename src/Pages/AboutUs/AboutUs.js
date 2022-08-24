import React, { Component } from 'react'

import {Grid, Box} from '@mui/material'

import PageTop from '../../Components/PageTop/PageTop'

import './AboutUs.css'
import aboutUs from '../../Data/Json/aboutUs.json'

class AboutUs extends Component {
    breadcrumbs = ["Home", "Help", "About Us"]

    renderMissionContent = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <div className = 'about-us-intro'>
                        <h3 className = 'about-us-intro-head'>Our Mission</h3>
                        <p className = 'about-us-intro-des'>{aboutUs.mission_content}</p>
                    </div>
                </Grid>
            </Grid>
        )
    }

    renderIntroductionContent = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <div className = 'about-us-intro'>
                        <h3 className = 'about-us-intro-head'>Our Story</h3>
                        { aboutUs.intro_contents.map((item, idx) => {
                            return <p className = 'about-us-intro-des' key = {idx}>{item}</p>
                        }) }
                    </div>
                </Grid>
            </Grid>
        )
    }

    renderContents = () => {
        return (
            <div className = 'about-us-main-contents'>
                <div className = 'about-us-intro-container'> 
                    { this.renderIntroductionContent() } 
                </div>
                <div className = 'about-us-intro-container'> 
                    { this.renderMissionContent() }
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