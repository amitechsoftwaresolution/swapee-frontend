import React, { Component } from 'react'

import {Box} from "@mui/material"

import ProductDetail from './ProductDetail'
import Loading from '../../Components/Loading/Loading'

import './Ad.css'

class Ad extends Component {
    state = {
        loading: false
    }
    
    renderMainContainer = () => {
        return (
            <div className = 'ad-page-main-container'>
                <Box sx = {{ flexGrow: 1 }} pt = {3} pb = {2} display = "flex" justifyContent = "center">
                    <div className = 'product-detail-component-root'>
                        <div className = "product-detail-component">
                            <ProductDetail />
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