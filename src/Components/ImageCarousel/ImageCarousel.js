import React from "react"

import Slider from "react-slick"

import Grid from "@mui/material/Grid"

import PostContentComponent from "../PostContentComponent/PostContentComponent"

const ImageCarousel = ({data}) => {

    const renderContentContainer = (item, idx) => (
        <Grid container spacing = {2} sx = {{padding: "20px"}} key = {idx}>
            <Grid item xs = {12} sm = {12} md = {6}>
                <PostContentComponent content = {item}/>
            </Grid>
            <Grid item xs = {12} sm = {12} md = {6}></Grid>
        </Grid>
    )

    return (
        <div style = {{background: "#4b4e5f", padding: "50px"}}>
            <Slider
                className = "image-carousel"
                dots
                infinite
                speed = {500}
                autoplay = {true}
                autoplaySpeed = {4000}
                slidesToShow = {1}
                slidesToScroll = {1}
                arrows = {false}
            >
                { data.map((item, idx) => renderContentContainer(item, idx)) }
            </Slider>
        </div>
    )
}

export default ImageCarousel