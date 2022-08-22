import React from 'react'

import {Box, Grid, useMediaQuery} from "@mui/material"

import SectionHeaderComponent from './SectionHeaderComponent'
import CategoryList from '../Category/CategoryList'
import CategoryItem from '../Category/CategoryItem'

import './Section.css'

const CategorySection = ({sectionDetail, categoryList, isViewMoreClicked, categoriesToView, handleViewMoreOnClick}) => {
    const matches = useMediaQuery('(min-width:800px)')

    const renderCategory = (item, idx) => {
        return (
            <Grid item xs = {4} sm = {4} md = {2} key = {idx}>
                <CategoryItem item = {item} />
            </Grid>
        )
    }

    return (
        <Box sx = {{pl: matches ? '60px': '20px', pr: matches ? '60px' : '30px', pt:'50px', pb:'10px'}}>
            <div className = 'section-root'>
                <SectionHeaderComponent 
                    title = {sectionDetail && sectionDetail.title}
                    description = {sectionDetail && sectionDetail.description}
                    isViewMoreClicked = {isViewMoreClicked}
                    handleViewMoreOnClick = {handleViewMoreOnClick}
                />
                <div className = 'category-list'>
                    <CategoryList data = {categoryList}/>
                </div>
                <div className = 'category-container'>
                    <Grid container spacing = {2}>
                        { categoriesToView && categoriesToView.map((i, idx) => { return renderCategory(i, idx) })}
                    </Grid>
                </div>
            </div>
        </Box>
    )
}

export default CategorySection