import React from "react"

import {Grid, Paper, IconButton, Rating, Divider} from "@mui/material"
import Favorite from '@mui/icons-material/Favorite'

import Slider from "react-slick"

import ExchangeButton from '../../Components/Widgets/ButtonWidget'
import StoreButton from '../../Components/Button/SecodaryButtonWidget'

import './ProductDetail.css'
import prod1 from '../../Assets/Images/prod1.jpg'
import prod2 from '../../Assets/Images/prod2.jpg'
import prod3 from '../../Assets/Images/prod3.jpg'
import prod4 from '../../Assets/Images/prod4.jpg'

const ProductDetail = ({handleExchangeAlertPopup}) => {
    const carouselData = [prod1, prod2, prod3, prod4]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    }

    const renderButtonFooter = () => {
        return (
            <Grid container spacing = {2} sx = {{marginTop: "10px", marginBottom: "10px"}}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <StoreButton onClick = {() => {}} name = "Store"/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {8}>
                    <ExchangeButton 
                        name = "Exchange" 
                        background = "rgb(0, 171, 85)"
                        onClick = {handleExchangeAlertPopup}    
                    />
                </Grid>
            </Grid>
        )
    }

    const renderPrice = () => (
        <div className = "product-detail-price">
            <h2>$275</h2>
            <p>$350</p>
            <span>(Inclusive of all taxes)</span>
        </div>
    )

    const renderRating = () => (
        <div className = "product-detail-rating">
            <Rating
                name = "simple-controlled"
                value = {2}
            />
            <span className = "product-detail-rating-count">(350+)</span>
        </div>
    )

    const renderDetailTitleContainer = () => (
        <Grid container spacing = {1}>
            <div className = "product-detail-info-title-con">
                <div className = "product-detail-info-title-left">
                    <div className = "in-stock-container">
                        <span>In Stock</span>
                    </div>
                    <div className = "product-detail-info-title">
                        <h3>Samsung Galaxy Note10+</h3>
                        <div className = "product-detail-info-new">
                            <span>New</span>
                        </div>
                    </div>
                </div>
                <div className = "product-detail-info-title-right">
                    <IconButton aria-label = "delete" size = "small">
                        <Favorite fontSize = "inherit" />
                    </IconButton>
                </div>
            </div>
        </Grid>
    )

    const renderDetailcontent = () => (
        <div className = "product-detail-info-root">
            { renderDetailTitleContainer() }
            <p className = "product-detail-info-des">
                Loljis opoasu va cepmof ta jojuvu liukobo bi filhanol anfa ida emezol ses hesgi. 
                Vu rebvo zorbago kap noba zabmibvoc walev lat hinim pal zuz buh mu becahbup.
                Loljis opoasu va cepmof ta jojuvu liukobo bi filhanol anfa ida emezol ses hesgi. 
                Vu rebvo zorbago kap noba zabmibvoc walev lat hinim pal zuz buh mu becahbup.
            </p>
            <div className = "product-detail-info-info">
                <div className = "product-detail-info-info-type">Category</div>
                <span className = "product-detail-info-info-value">Fashion</span>
            </div>
            <div className = "product-detail-info-info">
                <div className = "product-detail-info-info-type">Posted on</div>
                <span className = "product-detail-info-info-value">22-08-2022</span>
            </div>
            <div className = "product-detail-info-info">
                <div className = "product-detail-info-info-type">Posted by</div>
                <span className = "product-detail-info-info-value">Steve Rogers</span>
            </div>
            <div className = "product-detail-info-info">
                <div className = "product-detail-info-info-type">User Rating</div>
                { renderRating() }
            </div>
            { renderPrice() }
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "10px", m: "7px"}}/>
            { renderButtonFooter() }
        </div>
    )

    const renderImageContent = () => (
        <div className = "product-detail-image-root">
            <Paper variant = "outlined">
                <img src = {prod1} alt = "" className = "product-detail-image-src"/>
            </Paper>
            <div className = "product-detail-image-carousel">
                <Slider className = "image-carousel" {...settings}>
                    { carouselData.map((item, idx) => {
                        return (
                            <div className = "product-detail-image-carousel-img" key = {idx} >
                                <img src = {item} alt = "" className = "product-detail-image-carousel-src" />
                            </div>
                        )
                    }) }
                </Slider>
            </div>
        </div>
    )

    return (
        <div className = "product-detail-block">
            <Grid container spacing = {3}>
                <Grid item xs = {12} sm = {12} md = {5}>
                    { renderImageContent() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {7}>
                    { renderDetailcontent() }
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetail