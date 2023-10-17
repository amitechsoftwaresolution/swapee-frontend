import React from "react"
import "./ApiError.css"

const ApiError = () => {
    return (
        <div className = 'api_error_root'>
            <div className = "api_error_container">
                <div className = "server_error-500">
                    <div className="server_error_title">500</div>
                    <div className="server_error_description">Server Error</div>
                </div>
            </div>
        </div>
    )
}

export default ApiError