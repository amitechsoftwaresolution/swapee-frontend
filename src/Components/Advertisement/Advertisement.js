import React from "react"

import './Advertisement.css'
// import advertisement from '../../Assets/Images/advertisement.jpg'

import Paper from '@mui/material/Paper'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Grid from "@mui/material/Grid"

const Advertisement = ({content}) => {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        adaptiveHeight: false
    }
    
    const renderPostCarouselContent = (img, idx) => {
        return (
            <Paper elevation = {3} key = {idx}
                sx = {{
                    width: '100%', 
                    height: "650px",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    marginBottom: '-5px'
                }}
            />
        )
    }

    const renderAd = () => (
        <div className = "advertisement-comp">
            {/* <img src = {advertisement} alt = "advertisement" className = "advertisement-comp-src"/> */}
            <Grid container>
                <Grid item sm = {12} md = {12} sx = {{display: {xs: 'block', md: 'block'}}}>
                    <ImageCarousel data = {content} children = {renderPostCarouselContent} settings = {carouselSetting}/>
                </Grid>
            </Grid>
        </div>
    )

    return (
        <div className = "advertisement-comp-container">
            { renderAd() }
        </div>
    )
}

export default Advertisement