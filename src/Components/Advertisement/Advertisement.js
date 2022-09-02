import React from "react"

import './Advertisement.css'
import advertisement from '../../Assets/Images/advertisement.jpg'

const Advertisement = () => {

    const renderAd = () => (
        <div className = "advertisement-comp">
            <img src = {advertisement} alt = "advertisement" className = "advertisement-comp-src"/>
        </div>
    )

    return (
        <div className = "advertisement-comp-container">
            { renderAd() }
        </div>
    )
}

export default Advertisement