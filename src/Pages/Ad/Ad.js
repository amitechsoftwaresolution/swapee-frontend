import React, { Component } from 'react'

import {Box, Grid} from "@mui/material"

import ProductDetail from './ProductDetail'
import ProductDescription from './ProductDescription'
import Loading from '../../Components/Loading/Loading'
import Product from '../../Components/Product/Product'

import products from '../../Data/Json/products.json'

import './Ad.css'

class Ad extends Component {
    state = {
        loading: false
    }

    renderList = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'category_list-block-root'>
                    <Grid container spacing = {2}>
                        { products.slice(0, 4).map((item, idx) => {
                            return (
                                <Grid item xs = {6} sm = {6} md = {3} key = {idx}>
                                    <Product productData = {item} id = {idx}/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </Grid>
        )
    }
    
    renderMainContainer = () => {
        return (
            <div className = 'ad-page-main-container'>
                <Box sx = {{ flexGrow: 1 }} pt = {3} pb = {2} display = "flex" justifyContent = "center">
                    <div className = 'product-detail-component-root'>
                        <div className = "product-detail-component">
                            <ProductDetail />
                            <ProductDescription />
                        </div>
                        <div className = 'ad-page-other-products-root'>
                            <div className = 'ad-page-other-products-con'>
                                <h3>Visit store for more seller</h3>
                                <div className = "popular_categories_link">store</div>
                            </div>
                            { this.renderList() }
                        </div>
                    </div>
                </Box>
            </div>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'ad-page-root'>
                { this.renderMainContainer() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default Ad