import React from 'react'

import './CustomButton.css'

const PrimaryButton = ({label, onClick}) => {
    return (
        <div className = 'custom_button_contained' onClick = {onClick}>{label}</div>
    )
}

export default PrimaryButton