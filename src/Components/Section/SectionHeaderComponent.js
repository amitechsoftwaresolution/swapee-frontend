import React from "react"

import CustomCssButton from "../Button/CustomCssButton"

import './Section.css'

const SectionHeaderComponent = (props) => {
    return(
        <div className = "section-header-root">
            <div className = "section-title">
                <span>{props.data.title}</span>
                <h2>What we have ?</h2>
            </div>
            <p> {props.data.description} </p>
            <CustomCssButton href = "#" label = "View all"/>
        </div>
    )
}

export default SectionHeaderComponent