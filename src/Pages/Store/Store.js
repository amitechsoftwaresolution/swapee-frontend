import React, { Component } from 'react'

import {Box} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import StorePageCover from './StorePageCover'

import './Store.css'

class Store extends Component {
    breadcrumbs = ["Home", "Store"]

    renderContents = () => {
        return (
            <div className = 'store-page-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <StorePageCover />
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'store-page-main-container'>
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'store-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default Store