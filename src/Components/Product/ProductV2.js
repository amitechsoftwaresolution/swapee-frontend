import React from "react"

import { Grid, Box, Card, CardMedia, CardContent, Divider, CardActions } from "@mui/material"
import Button from "@mui/material/Button"

import PrimaryButton from "../Button/PrimaryButton"

import './Product.css'
import product_6 from '../../Assets/Images/product_6.jpg'

const ProductV2 = ({productData, id}) => {
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
        <CardMedia component = "img" sx = {{height: "200px"}} image = {product_6} alt = {title} />
    )

    return (
        <Card
            sx = {{
                backgroundColor: "rgb(255, 255, 255)",
                boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                borderRadius: "16px"
            }}
        >
        { renderMedia() }
        { renderContent() }
        <Divider sx={{ background: "#F8F9F9", opacity: "0.2"}} />
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    )
}

export default ProductV2