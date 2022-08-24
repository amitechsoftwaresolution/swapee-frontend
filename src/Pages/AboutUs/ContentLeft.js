import React from "react"

import {Grid} from '@mui/material'

import './AboutUs.css'

const ContentLeft = ({title, children, src}) => {
    return (
        <Grid container spacing = {2} display = "flex" alignItems = "center" justifyContent = "center">
            <Grid item xs = {12} sm = {9} md = {8}>
                <div className = 'about-us-intro'>
                    <h3 className = 'about-us-intro-head'>{title}</h3>
                    { children }
                </div>
            </Grid>
            <Grid item sm = {3} md = {4} sx = {{display: {xs: 'none', md: 'block'}}}>
                <div className = "hov-bor1">
                    <div className = "hov-img0">
                        <img src = {src} alt = {title} className = "hov-img0-src"/>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default ContentLeft