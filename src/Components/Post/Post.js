import React from 'react'

import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper'

import PostContentComponent from "../PostContentComponent/PostContentComponent"
import ImageCarousel from '../ImageCarousel/ImageCarousel'

import './Post.css'

const Post = ({content, handleViewOnClick, handleStoreOnClick}) => {

    const carouselSetting = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,
        adaptiveHeight: true
    }

    const renderPostCarouselContent = (img, idx) => {
        return (
            <Paper elevation = {3} key = {idx}
                sx = {{
                    width: '100%', 
                    height: "450px", 
                    borderRadius: "25px", 
                    display: "flex",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover"
                }}
            />
        )
    }

    return (
        <div className = 'post-root'>
            <Grid container spacing = {4} sx = {{padding: "10px"}}>
                <Grid item xs = {12} sm = {12} md = {6} sx = {{padding: "5px"}}>
                    <PostContentComponent 
                        content = {content}
                        handleViewOnClick = {handleViewOnClick}
                        handleStoreOnClick = {handleStoreOnClick}
                    />
                </Grid>
                <Grid item sm = {12} md = {6} sx = {{display: {xs: 'none', md: 'block'}}}>
                    <ImageCarousel data = {content.imgLinks} children = {renderPostCarouselContent} settings = {carouselSetting}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Post