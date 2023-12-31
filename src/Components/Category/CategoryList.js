import React, {useState, useLayoutEffect} from 'react'

import { Link } from "react-router-dom"

import {useMediaQuery} from "@mui/material"

import ImageCarousel from '../ImageCarousel/ImageCarousel'

import paths from "../../Data/Json/paths.json"

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
        arrows: false,
        adaptiveHeight: true
    }

    const renderCategoryTabItem = (item, idx) => (
        <li className = "category-tabs-item" key = {idx}>
            <Link to = {paths.Category} className = "category-tabs-link">
                <span className = "text">{item.label}</span>
            </Link>
        </li>
    )

    return (
        <div className = "category-tabs-container">
            <ImageCarousel data = {data} children = {renderCategoryTabItem} settings = {carouselSetting}/>
        </div>
    )
}

export default CategoryList