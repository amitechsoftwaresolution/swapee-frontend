import React from "react"

import Slider from "react-slick"

import Paper from '@mui/material/Paper'

const ImageCarousel = ({data}) => {

    const renderContentContainer = (item, idx) => (
        <div key = {idx}>
            <Paper elevation = {3} 
                sx = {{
                    width: '100%', 
                    height: "450px", 
                    borderRadius: "25px", 
                    display: "flex",
                    backgroundImage: `url(${item})`,
                    backgroundSize: "cover"
                }}
            />
        </div>
    )

    return (
        <div>
            <Slider
                className = "image-carousel"
                dots
                infinite
                speed = {2000}
                autoplay = {true}
                autoplaySpeed = {4000}
                slidesToShow = {1}
                slidesToScroll = {1}
                arrows = {true}
                fade = {true}
                adaptiveHeight = {true}
            >
                { data.map((item, idx) => renderContentContainer(item, idx)) }
            </Slider>
        </div>
    )
}

export default ImageCarousel