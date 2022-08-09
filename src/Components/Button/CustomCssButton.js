import React from 'react'

import './CustomButton.css'

const CustomCssButton = ({href, label}) => {
    return <a href = {href} className = "custom-css-button">{label}</a>
}

export default CustomCssButton