import React from 'react'

import {Box, Grid, IconButton, CardContent} from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category'

import CustomCssButton from "../Button/CustomCssButton"

import './Section.css'

const Section = (props) => {

    const data = [
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
    ]

    const renderCategory = (item, idx) => {
        return (
            <Grid item xs = {12} sm = {4} md = {2} key = {idx}>
                <div className = 'category-item'>
                    <img src = {item.image} alt = "img" width = "100%" />
                    <CardContent>
                        <div className = 'category-item-info'>
                            <IconButton
                                sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <CategoryIcon />
                            </IconButton>
                            <span>{item.type}</span>
                        </div>
                    </CardContent>
                </div>
            </Grid>
        )
    }

    return (
        <Box sx = {{ pl:'60px', pr:'60px', pt:'50px', pb:'30px'}}>
            <div className = 'section-root'>
                <div className = 'section-header-root'>
                    <div className = "section-title">
                        <span>{props.data.title}</span>
                        <h2>What we have ?</h2>
                    </div>
                    <p> {props.data.description} </p>
                </div>
                <div className = 'view-more-container'>
                    {/* <a href = "/" className = 'view-more-link'>View More</a> */}
                    <CustomCssButton href = "#" label = "View all"/>
                </div>
                <div className = 'category-container'>
                    <Grid container spacing = {1}>
                        { data.map((i, idx) => { return renderCategory(i, idx) })}
                    </Grid>
                </div>
            </div>
        </Box>
    )
}

export default Section