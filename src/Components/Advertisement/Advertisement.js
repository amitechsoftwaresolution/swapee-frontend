import React from "react"

import './Advertisement.css'

const Advertisement = ({src}) => {

    const renderParallax = () => {
        return (
            <div className = 'adv-parallax'>
                <span className = 'adv-parallax-title'>Advertisement will be shown here</span>
            </div>
        )
    }

    const renderSource = () => (
        <div className = "advertisement-comp">
            <img src = {src} className = "advertisement-comp-src" alt = ""/>
        </div>
    )

    return (
        <div className = "advertisement-comp-container">
            { renderParallax() }
        </div>
    )
}

export default Advertisement