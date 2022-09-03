import React from 'react'

import {Box, useMediaQuery} from "@mui/material"

import SectionHeaderComponent from './SectionHeaderComponent'
import CategoryList from '../Category/CategoryList'
import CustomCssButton from "../Button/CustomCssButton"
import OurCategory from './OurCategory'

import './Section.css'

const CategorySection = ({sectionDetail, categoryList, isViewMoreClicked, categoriesToView, handleViewMoreOnClick}) => {
    const matches = useMediaQuery('(min-width:800px)')

    const label = isViewMoreClicked ? "View less" : "View more"

    return (
        <Box sx = {{pl: matches ? '60px': '20px', pr: matches ? '60px' : '30px', pt:'50px', pb:'10px'}}>
            <div className = 'section-root'>
                <SectionHeaderComponent 
                    title = {sectionDetail && sectionDetail.title}
                    description = {sectionDetail && sectionDetail.description}
                />
                <div className = 'category-list'>
                    <CategoryList data = {categoryList} />
                </div>
                <div className = 'category-container'>
                    <div className = 'view-more-container'>
                        <CustomCssButton label = {label} onClick = {handleViewMoreOnClick} />
                    </div>
                    <Box sx = {{mt: "40px"}}>
                        <OurCategory items = {categoriesToView}/>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default CategorySection