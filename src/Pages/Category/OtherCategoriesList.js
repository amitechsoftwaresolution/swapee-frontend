import React from "react"

import {Grid} from '@mui/material'

import CategoriesListItem from "./CategoryListItem"

import './Category.css'

const OtherCategoriesList = ({otherCategories}) => {

    const renderCategoryList = (item, idx) => {
        const {label, src} = item
        return <CategoriesListItem label = {label} key = {idx} src = {src} />
    }

    const renderPopularCategory = () => (
        <div className = 'popular-other-categories'>
            <div className = "popular_categories_title">Other Popular Categories</div>
            <div className = "popular_categories_link">View full catalog</div> 
        </div>
    )

    return (
        <Grid container spacing = {2}>
            <Grid item xs = {12} sm = {12} md = {12}>
                { renderPopularCategory() }  
            </Grid>
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = "other-cat-row-root">
                    { otherCategories.map((item, idx) => renderCategoryList(item, idx)) }
                </div>
            </Grid>
        </Grid>
    )
}

export default OtherCategoriesList