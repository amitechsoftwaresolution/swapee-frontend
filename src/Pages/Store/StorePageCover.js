import React from "react"

import {Box, Grid, Avatar} from '@mui/material'

import './Store.css'
import storeCoverImage from '../../Assets/Images/storeCoverImage.jpg'
import storeImage from '../../Assets/Images/store.jpg'
import sellerIcon from '../../Assets/Images/Common/seller.png'
import verifyIcon from '../../Assets/Images/Common/verify.png'

const StorePageCover = () => {

    const renderValues = (name, value) => (
        <div className = "store-page-cover-info-values">
            <p>{name}</p>
            <span>{value}</span>
        </div>
    )

    const renderInfo = () => (
        <Grid container spacing = {1}>
            <Grid item xs = {12} sm = {4} md = {4}>{ renderValues("Address", "Puttalam - Colombo Rd, Negombo 11500") }</Grid>
            <Grid item xs = {12} sm = {4} md = {4}>{ renderValues("Hours", "Closed Opens 10AM") }</Grid>
            <Grid item xs = {12} sm = {4} md = {4}>{ renderValues("Phone", "+94 999999999") }</Grid>
        </Grid>
    )

    const renderCoverInfo = () => (
        <Grid container spacing = {1}>
            <Grid item xs = {12} sm = {3} md = {2}>
                <div className = "store-page-cover-info-avatar-root">
                    <img src = {storeImage} alt = "store" />
                </div>
            </Grid>
            <Grid item xs = {12} sm = {9} md = {10}>
                <div className = "store-page-cover-info-val-root">
                    <div className = "store-page-cover-info-val-top">
                        <span className = "store-page-cover-info-val-top-span">ZigZag Store</span>
                        { renderInfo() }
                    </div>
                    <div className = "store-page-cover-info-val-bottom">
                        <div className = "product-content-icons">
                            <img src = {sellerIcon} alt = "best-seller" />
                            <img src = {verifyIcon} alt = "best-seller" />
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )

    const renderCoverImage = () => (
        <div className = "store-page-cover-image-root">
            <img src = {storeCoverImage} alt = "store-cover" />
            { renderCoverInfo() }
        </div>
    )

    return (
        <div className = "store-page-cover-root">
            <div className = "store-page-cover-con">
                { renderCoverImage() }
            </div>
        </div>
    )
}

export default StorePageCover