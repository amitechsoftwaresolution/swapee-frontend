import React from "react"

import Slider from "react-slick"

const ImageCarousel = ({data, children, settings}) => {
    return (
            <Slider
                className = "image-carousel"
                {...settings}
            >
                { data && data.map((item, idx) => { return  children(item, idx) }) }
            </Slider>
    )
}

export default ImageCarousel