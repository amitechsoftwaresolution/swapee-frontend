import React, { Component } from 'react'

import {Box, Grid} from "@mui/material"

import ProductDetail from './ProductDetail'
import ProductDescription from './ProductDescription'
import Loading from '../../Components/Loading/Loading'
import Product from '../../Components/Product/Product'
import PageHeader from '../../Components/PageTop/PageHeader'
import ShareDecisionModel from '../../Components/Popup/ShareDecisionModel'
import ShareNewExchangeModel from '../../Components/Popup/ShareNewExchangeModel'

import products from '../../Data/Json/products.json'

import './Ad.css'

class Ad extends Component {
    state = {
        loading: false,
        openExchangeAlertPopup: false,
        openNewExchangePopup: false,
        title: "",
        category: "",
        description: "",
        selectedImage: null,
        selectedImageFile: null
    }

    breadcrumbs = ["Home", "Ad"]

    handleExchangeOnClick = () => {

    }

    handleCancelOnClick = () => {
        this.handleNewExchangePopup()

        this.setState({
            title: "",
            category: "",
            description: ""
        })
    }

    handleYesOnClick = () => {
        this.handleExchangeAlertPopup()
    }

    handleNoOnClick = () => {
        this.handleExchangeAlertPopup()
        this.handleNewExchangePopup()
    }

    handleImageFileOnSelect = (file) => {
        let reader = new FileReader()

        reader.onloadend = () => {
            this.setState({ 
                selectedImage: reader.result,
                selectedImageFile: file 
            })
        }

        reader.readAsDataURL(file)
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    inputImageOnChange = (e) => {
        const { files } = e.target

        if (files && files.length) {
            this.handleImageFileOnSelect(files[0])
        }
    }

    handleNewExchangePopup = () => {
        this.setState({ openNewExchangePopup: !this.state.openNewExchangePopup })
    }

    handleExchangeAlertPopup = () => {
        this.setState({ openExchangeAlertPopup: !this.state.openExchangeAlertPopup })
    }

    renderNewExchangePopup = (open) => {
        return (
            <ShareNewExchangeModel
                open = {open}
                state = {this.state}
                handleClose = {this.handleNewExchangePopup}
                handleCancelOnClick = {this.handleCancelOnClick}
                handleExchangeOnClick = {this.handleExchangeOnClick}
                handleInputOnChange = {this.handleInputOnChange}
                inputImageOnChange = {this.inputImageOnChange}
            />
        )
    }

    renderExchangeAlertPopup = (open) => {
        return (
            <ShareDecisionModel 
                open = {open}
                handleClose = {this.handleExchangeAlertPopup}
                handleYesOnClick = {this.handleYesOnClick}
                handleNoOnClick = {this.handleNoOnClick}
            />
        )
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
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    <div className = 'ad-page-header-contents'>
                        <PageHeader navs = {this.breadcrumbs} />
                    </div>
                </Box>
                <Box sx = {{ flexGrow: 1 }} pb = {2} display = "flex" justifyContent = "center">
                    <div className = 'product-detail-component-root'>
                        <div className = "product-detail-component">
                            <ProductDetail 
                                handleExchangeAlertPopup = {this.handleExchangeAlertPopup}
                            />
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
        const {loading, openExchangeAlertPopup, openNewExchangePopup} = this.state
        return (
            <div className = 'ad-page-root'>
                { this.renderMainContainer() }
                { loading && <Loading open = {loading} /> }
                { this.renderExchangeAlertPopup(openExchangeAlertPopup) }
                { this.renderNewExchangePopup(openNewExchangePopup) }
            </div>
        )
    }
}

export default Ad