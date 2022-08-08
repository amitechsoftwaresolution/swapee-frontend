import React from "react"

import Slider from "react-slick"

const ImageCarousel = ({data, children}) => {
    return (
            <Slider
                className = "image-carousel"
                dots
                infinite
                speed = {3000}
                autoplay = {true}
                autoplaySpeed = {5000}
                slidesToShow = {1}
                slidesToScroll = {1}
                arrows = {true}
                fade = {true}
                adaptiveHeight = {true}
            >
                { data && data.map((item, idx) => { return  children(item, idx) }) }
            </Slider>
    )
}

export default ImageCarousel