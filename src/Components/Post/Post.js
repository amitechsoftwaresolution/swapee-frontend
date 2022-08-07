import React from 'react'

import Grid from "@mui/material/Grid"

import PostContentComponent from "../PostContentComponent/PostContentComponent"
import ImageCarousel from '../ImageCarousel/ImageCarousel'

import './Post.css'

const Post = ({content}) => {
    return (
        <div className = 'post-root'>
            <Grid container spacing = {4} sx = {{padding: "20px"}}>
                <Grid item xs = {12} sm = {12} md = {6} sx = {{padding: "5px"}}>
                    <PostContentComponent content = {content}/>
                </Grid>
                <Grid item xs = {'none'} sm = {12} md = {6} sx = {{display: {xs: 'none', md: 'block'}}}>
                    <ImageCarousel data = {content.imgs}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Post