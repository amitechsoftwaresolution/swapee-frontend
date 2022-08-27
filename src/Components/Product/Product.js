import React from "react"

import { Grid, Box, CardMedia, CardContent } from "@mui/material"

import PrimaryButton from "../Button/PrimaryButton"

import './Product.css'
import sunGlasses from '../../Assets/Images/sunGlasses.png'
import shoes from '../../Assets/Images/shoes.png'

const Product = ({productData, id}) => {
    const {title, description, price, date} = productData

    const renderFooterBlock = () => (
        <Grid container spacing = {4} sx = {{alignItems: "center"}}>
            <Grid item xs = {12} sm = {6} md = {6}>
                <PrimaryButton label = "STORE" />
            </Grid>
            <Grid item xs = {12} sm = {6} md = {6}>
                <span className = "product-conten-postedOn">
                    Posted on { date }
                </span>
            </Grid>
        </Grid>
    )

    const renderContent = () => (
        <Box sx = {{ display: 'flex', flexDirection: 'column'}}>
            <CardContent sx = {{ flex: '1 0 auto' }}>
                <span> { title } </span>
                <p className = "product-content-des"> { description } </p>
                <span className = "product-content-price"> LKR { price } </span>
            </CardContent>
        </Box>
    )

    const renderMedia = () => (
        <CardMedia component = "img" sx = {{ width: 151 }} image = {id % 2 === 0 ? sunGlasses : shoes} alt = {title} />
    )

    return (
        <div className = "product-item-root">
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {4} md = {4}>
                    { renderMedia() }
                </Grid>
                <Grid item xs = {12} sm = {4} md = {8}>
                    { renderContent() }
                    { renderFooterBlock() }
                </Grid>
            </Grid>
        </div>
    )
}

export default Product