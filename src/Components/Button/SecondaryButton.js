import React from 'react'

import './CustomButton.css'

const SecondaryButton = ({label, onClick}) => {
    return (
        <div className = 'custom_button_outlined' onClick = {onClick}>{label}</div>
    )
}

export default SecondaryButton