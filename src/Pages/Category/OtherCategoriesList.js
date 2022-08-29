import React from "react"

import {Grid} from '@mui/material'

import CategoriesListItem from "./CategoryListItem"

import './Category.css'

const OtherCategoriesList = ({otherCategories}) => {

    const renderCategoryList = (item, idx) => {
        const {label, src} = item
        return <CategoriesListItem label = {label} key = {idx} src = {src} />
    }

    return (
        <Grid container spacing = {2}>
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'ad-page-other-products-con'>
                    <h3>Other Popular Categories</h3>
                </div> 
            </Grid>
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = "other-cat-row-root">
                    { otherCategories.map((item, idx) => renderCategoryList(item, idx)) }
                </div>
                <div className = "pupolar_categories_full_catlog_root">
                    <div className = "popular_categories_link">View full catalog</div>
                </div>
            </Grid>
        </Grid>
    )
}

export default OtherCategoriesList