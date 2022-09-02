import React from 'react'

import './Status.css'

const Status = ({status, color}) => {
    const className = {
        "In-Stock": "product-in-stock-status-container",
        "Out-Of-Stock": "product-out-stock-status-container",
        "Urgent": "product-urgent-status-container",
        "Feature": "product-feature-status-container"
    }

    return (
        <div className = {["product-status-container", className[status]].join(' ')} style = {{color}}>
            <span className = 'product-status-container-span'>{status}</span>
        </div>
    )
}

export default Status