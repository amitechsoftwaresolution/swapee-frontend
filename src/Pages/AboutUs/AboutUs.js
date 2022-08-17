import React, { Component } from 'react'

import './AboutUs.css'

class AboutUs extends Component {

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