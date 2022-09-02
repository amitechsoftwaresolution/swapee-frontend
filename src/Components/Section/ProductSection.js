import React from 'react'

import {Box, Grid, useMediaQuery} from "@mui/material"

import SectionHeaderComponent from './SectionHeaderComponent'
import CustomCssButton from "../Button/CustomCssButton"
import Product from '../Product/Product'

import './Section.css'

const ProductSection = ({sectionDetail, posts, handleViewMoreOnClick}) => {
    const matches = useMediaQuery('(min-width:800px)')

    const renderPosts = (item, idx) => {
        return (
            <Grid item xs = {4} sm = {4} md = {3} key = {idx}>
                <Product productData = {item} id = {idx}/>
            </Grid>
        )
    }

    return (
        <Box sx = {{pl: matches ? '60px': '20px', pr: matches ? '60px' : '30px', pt:'50px', pb:'10px'}}>
            <div className = 'section-root'>
                <SectionHeaderComponent 
                    title = {sectionDetail && sectionDetail.title}
                    description = {sectionDetail && sectionDetail.description}
                />
                <div className = 'category-container'>
                    <div className = 'view-more-container'>
                        <CustomCssButton label = "View More" onClick = {handleViewMoreOnClick} />
                    </div>
                    <Grid container spacing = {2}>
                        { posts && posts.map((i, idx) => { return renderPosts(i, idx) })}
                    </Grid>
                </div>
            </div>
        </Box>
    )
}

export default ProductSection