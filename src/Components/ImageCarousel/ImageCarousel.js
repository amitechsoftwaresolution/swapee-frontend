import React from "react"

import Slider from "react-slick"

import Grid from "@mui/material/Grid"
import Paper from '@mui/material/Paper'

import PostContentComponent from "../PostContentComponent/PostContentComponent"

const ImageCarousel = ({data}) => {

    const renderContentContainer = (item, idx) => (
        <div  key = {idx}>
            <Grid container spacing = {2} sx = {{padding: "20px"}}>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <PostContentComponent content = {item}/>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6}>
                    <Paper 
                        elevation = {3} 
                        sx = {{
                            width: '100%', 
                            height: "100%", 
                            borderRadius: "25px", 
                            display: "flex", 
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover"
                        }}
                    />
                </Grid>
            </Grid>
        </div>
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
                afterChange = {(e) => console.log(e)}
            >
                { data.map((item, idx) => renderContentContainer(item, idx)) }
            </Slider>
        </div>
    )
}

export default ImageCarousel