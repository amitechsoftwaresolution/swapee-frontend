import React from "react"

import './Section.css'

const SectionHeaderComponent = ({title, description}) => {
    return(
        <div className = "section-header-root">
            <div className = "section-title">
                <span>{title}</span>
                <h2>What we have ?</h2>
            </div>
            <p> {description} </p>
        </div>
    )
}

export default SectionHeaderComponent