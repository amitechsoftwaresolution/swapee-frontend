import React from "react"

import {Box, Grid, Stack, Breadcrumbs} from '@mui/material'
import FiberManualRecord from '@mui/icons-material/FiberManualRecord'
import HomeIcon from '@mui/icons-material/House'
import CategoryIcon from '@mui/icons-material/Category'

import './PageTop.css'

const PageTop = ({breadcrumbs, subHead}) => {
    let len = breadcrumbs ? breadcrumbs.length : 0

    const ICONS = {
        "Home": <HomeIcon sx = {{width: "20px", height: "20px", marginRight: "5px", mb: "3px"}}/>,
        "Category": <CategoryIcon sx = {{width: "20px", height: "20px", marginRight: "5px", mb: "3px"}}/>
    }

    const renderBreadcrumb = (i, idx) => (
        <span className = {idx === len- 1 ? "page-top-bread-crumb-sub-last" : "page-top-bread-crumb-sub"} key = {idx}>
        { ICONS[i] }
        {i}
        </span>
    )

    const renderSeparator = () => (
        <FiberManualRecord fontSize = "small" sx = {{width: "7px", height: "7px", mr: "8px", ml: "8px"}}/>
    )

    const renderSubs = () => (
        <Grid item xs = {12} sx = {{marginTop: "-15px"}}>
            <Stack spacing = {2}>
                <Breadcrumbs separator = {renderSeparator()} aria-label = "breadcrumb">
                    { breadcrumbs.map((i, idx) => renderBreadcrumb(i, idx)) }
                </Breadcrumbs>
            </Stack>
        </Grid>
    )

    const renderHeaderTitle = () => (
        <Grid item xs = {12}>
            <p className = "page-top-header-title-p">
                <span className = "page-top-header-title-s1">SWAPEE</span> 
                <span className = "page-top-header-title-s2">{subHead ? subHead : "CUSTOMER CARE"}</span>
            </p>
        </Grid>
    )

    return (
        <Box 
            sx = {{ flexGrow: 1 }} 
            pt = {5} 
            display = "flex" 
            justifyContent = "center"
        >
            <Grid container spacing = {2} width = "90%" display = "flex">
                { renderHeaderTitle() }
                { renderSubs() }
            </Grid>
        </Box>
    )
}

export default PageTop