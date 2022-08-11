import React, {useState, useLayoutEffect} from 'react'

import {Box, useMediaQuery} from "@mui/material"

import ImageCarousel from '../ImageCarousel/ImageCarousel'

import './Category.css'

const CategoryList = ({data}) => {
    const matches = useMediaQuery('(min-width:800px)')
    
    const [slidesToShow, setSlidesToShow] = useState(9)
    const [slidesToScroll, setSlidesToScroll] = useState(3)

    useLayoutEffect(() => {
        window.addEventListener('resize', setPropertiesWithScreenSize)
    }, [])

    const setPropertiesWithScreenSize = () => {
        if (window.innerWidth >= 1300) {
            setSlidesToShow(9)
            setSlidesToScroll(3)
        }
        else if (window.innerWidth >= 1200) {
            setSlidesToShow(6)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 950) {
            setSlidesToShow(5)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 750) {
            setSlidesToShow(4)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 600) {
            setSlidesToShow(3)
            setSlidesToScroll(1)
        }
        else if (window.innerWidth >= 360) {
            setSlidesToShow(2)
            setSlidesToScroll(1)
        }
        else {
            setSlidesToShow(1)
            setSlidesToScroll(1)
        }
    }

    const carouselSetting = {
        dots: matches,
        infinite: true,
        speed: 3000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true
    }

    const renderCategoryTabItem = (item, idx) => (
        <li className = "category-tabs-item" key = {idx}>
            <a className = "category-tabs-link" href = "/">
                <span className = "text">{item.type}</span>
            </a>
        </li>
    )

    return (
        <div className = "category-tabs-container">
            <Box>
                <ImageCarousel data = {data} children = {renderCategoryTabItem} settings = {carouselSetting}/>
            </Box>
        </div>
    )
}

export default CategoryList