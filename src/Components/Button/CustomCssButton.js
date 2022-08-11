import React from 'react'

import './CustomButton.css'

const CustomCssButton = ({label, onClick}) => {
    return <div className = "custom-css-button" onClick = {onClick}>
        {label}
    </div>
}

export default CustomCssButton