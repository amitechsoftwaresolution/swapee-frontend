import React, {useState, useLayoutEffect} from "react"

import {Grid} from '@mui/material'

import CategoriesListItem from "./CategoryListItem"
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'

import './Category.css'

const OtherCategoriesList = ({otherCategories}) => {
    const [slidesToShow, setSlidesToShow] = useState(8)
    const [slidesToScroll, setSlidesToScroll] = useState(3)

    useLayoutEffect(() => {
        window.addEventListener('resize', setPropertiesWithScreenSize)
    }, [])

    const setPropertiesWithScreenSize = () => {
        if (window.innerWidth >= 1300) {
            setSlidesToShow(8)
            setSlidesToScroll(3)
        }
        else if (window.innerWidth >= 1200) {
            setSlidesToShow(5)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 950) {
            setSlidesToShow(4)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 750) {
            setSlidesToShow(3)
            setSlidesToScroll(2)
        }
        else if (window.innerWidth >= 600) {
            setSlidesToShow(3)
            setSlidesToScroll(1)
        }
        else if (window.innerWidth >= 360) {
            setSlidesToShow(3)
            setSlidesToScroll(1)
        }
        else {
            setSlidesToShow(1)
            setSlidesToScroll(1)
        }
    }

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        adaptiveHeight: true
    }

    const renderCategoryList = (item, idx) => {
        const {label, src} = item
        return <CategoriesListItem 
            label = {label} 
            key = {idx}
            src = {src}    
        />
    }

    const renderPopularCategory = () => (
        <div className = 'popular-other-categories'>
            <div className = "popular_categories_title">Other Popular Categories</div>
            <div className = "popular_categories_link">View full catalog</div> 
        </div>
    )

    return (
        <Grid container spacing = {2}>
            <Grid item xs = {12} sm = {12} md = {12}>
                { renderPopularCategory() }  
            </Grid>
            <Grid item xs = {12} sm = {12} md = {12}>
                <ImageCarousel data = {otherCategories} children = {renderCategoryList} settings = {carouselSetting}/>
            </Grid>
        </Grid>
    )
}

export default OtherCategoriesList