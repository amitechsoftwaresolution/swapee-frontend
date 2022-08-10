import React from 'react'

import {Box, Grid} from "@mui/material"

import SectionHeaderComponent from './SectionHeaderComponent'
import CategoryList from '../Category/CategoryList'
import CategoryItem from '../Category/CategoryItem'

import './Section.css'

const CategorySection = ({sectionDetail, categoryList, isViewMoreClicked, categoriesToView, handleViewMoreOnClick}) => {

    const renderCategory = (item, idx) => {
        return (
            <Grid item xs = {3} sm = {4} md = {2} key = {idx}>
                <CategoryItem item = {item} />
            </Grid>
        )
    }

    return (
        <Box sx = {{ pl:'60px', pr:'60px', pt:'50px', pb:'30px'}}>
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