import React, { Component } from 'react'

import { useLocation } from "react-router-dom"

import {Box, Grid} from "@mui/material"

import ProductDetail from './ProductDetail'
// import ProductDescription from './ProductDescription'
import Loading from '../../Components/Loading/Loading'
import Product from '../../Components/Product/Product'
import PageHeader from '../../Components/PageTop/PageHeader'
import ShareDecisionModel from '../../Components/Popup/ShareDecisionModel'
import ShareNewExchangeModel from '../../Components/Popup/ShareNewExchangeModel'
import ShareExistingPostModel from '../../Components/Popup/ShareExistingPostModel'
import ReportAdModel from '../../Components/Popup/ReportAdModel'

import products from '../../Data/Json/products.json'

import './Ad.css'

function withLocation(Component) {
    return props => <Component {...props} location = {useLocation()} />
}

class Ad extends Component {
    state = {
        loading: false,
        openExchangeAlertPopup: false,
        openNewExchangePopup: false,
        openExistingPostPopup: false,
        openReportAdPopup: false,
        title: "",
        category: "",
        description: "",
        selectedImage: null,
        selectedImageFile: null,
        count: 5,
        page: 1,
        email: "",
        reason: "",
        message: ""
    }

    breadcrumbs = ["Home", "Ad"]

    componentDidMount() {
        console.log(this.props.location.state)
    }

    handleReportAdSubmitOnClick = () => {

    }

    handleReportAdCancelOnClick = () => {
        this.handleReportAdPopup()

        this.setState({
            email: "",
            reason: "",
            message: ""
        })
    }

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
        this.handleExistingPostPopup()
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

    handlePageOnChange = (event, newPage) => {
        this.setState({ page: newPage})
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

    handleReportAdPopup = () => {
        this.setState({ openReportAdPopup: !this.state.openReportAdPopup })
    }

    handleExistingPostPopup = () => {
        this.setState({ openExistingPostPopup: !this.state.openExistingPostPopup })
    }

    handleNewExchangePopup = () => {
        this.setState({ openNewExchangePopup: !this.state.openNewExchangePopup })
    }

    handleExchangeAlertPopup = () => {
        this.setState({ openExchangeAlertPopup: !this.state.openExchangeAlertPopup })
    }

    renderReportAdPopup = (open) => {
        const {email, reason, message} = this.state
        const values = {email, reason, message}
        return (
            <ReportAdModel 
                open = {open}
                values = {values}
                handleClose = {this.handleReportAdPopup}
                handleCancelOnClick = {this.handleReportAdCancelOnClick}
                handleSubmitOnClick = {this.handleReportAdSubmitOnClick}
                handleInputOnChange = {this.handleInputOnChange}
            />
        )
    }

    renderShareExistingPostPopup = (open) => {
        const {count, page} = this.state
        return (
            <ShareExistingPostModel 
                open = {open}
                productData = {products}
                count = {count}
                page = {page}
                handleClose = {this.handleExistingPostPopup}
                handlePageOnChange = {this.handlePageOnChange}
            />
        )
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
                            {/* <ProductDescription /> */}
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
        const {loading, openExchangeAlertPopup, openNewExchangePopup, openExistingPostPopup, openReportAdPopup} = this.state
        return (
            <div className = 'ad-page-root'>
                { this.renderMainContainer() }
                { loading && <Loading open = {loading} /> }
                { this.renderExchangeAlertPopup(openExchangeAlertPopup) }
                { this.renderNewExchangePopup(openNewExchangePopup) }
                { this.renderShareExistingPostPopup(openExistingPostPopup) }
                { this.renderReportAdPopup(openReportAdPopup) }
            </div>
        )
    }
}

export default withLocation(Ad)