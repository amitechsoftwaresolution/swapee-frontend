import React from "react"

import CustomCssButton from "../Button/CustomCssButton"

import './Section.css'

const SectionHeaderComponent = ({title, description, isViewMoreClicked, handleViewMoreOnClick}) => {
    return(
        <div className = "section-header-root">
            <div className = "section-title">
                <span>{title}</span>
                <h2>What we have ?</h2>
            </div>
            <p> {description} </p>
            <div className = 'view-more-container'>
                <CustomCssButton 
                    label = {isViewMoreClicked ? "View less" : "View more"} 
                    onClick = {handleViewMoreOnClick}
                />
            </div>
        </div>
    )
}

export default SectionHeaderComponent