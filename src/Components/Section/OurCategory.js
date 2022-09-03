import React from 'react'

import {Grid} from "@mui/material"

import './Section.css'
import categoriesIcon from '../../Assets/Images/Common/categories.png'

const OurCategory = ({items}) => {

    const renderItemBox = (item, idx) => {
        const {label, src} = item
        return (
            <Grid item xs = {6} sm = {6} md = {3} key = {idx}>
                <div className = 'our-categories-new-itme-root'>
                    <div className = "content_services">
                        <div className = "d-flex justify-content-end">
                            <div className = "icon d-flex">
                                <img src = {src} alt = {label} className = "content_service_icon"/>
                            </div>
                        </div>
                        <div className = "media-body">
                            <h3 className = 'media-body-h3'>{label}</h3>
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }

    const renderMainBox = () => {
        return (
            <Grid item xs = {12} sm = {6} md = {6}>
                <div className = 'our-category-new-root'>
                    <div className = "content_services">
                        <div className = "d-flex justify-content-end">
                            <div className = "icon d-flex">
                                <img src = {categoriesIcon} alt = "categories" className = "content_service_icon"/>
                            </div>
                        </div>
                        <div className = "media-body">
                            <h3 style = {{fontWeight: "bold"}}>Our Categories</h3>
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }

    const renderTechnologies = () => {
        return (
            <Grid container spacing = {1}>
                { renderMainBox() }
                { items.map((item, idx) => renderItemBox(item, idx)) }
            </Grid>
        )
    }

    return (
        <div className = "section_categories">
            { renderTechnologies() }
        </div>
    )
}

export default OurCategory