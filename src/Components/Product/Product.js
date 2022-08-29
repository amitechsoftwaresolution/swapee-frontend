import React from "react"

import { Grid, Box, Card, CardMedia, CardContent, Divider, CardActions } from "@mui/material"

import PrimaryButton from "../Button/PrimaryButton"

import './Product.css'
import sellerIcon from '../../Assets/Images/Common/seller.png'
import verifyIcon from '../../Assets/Images/Common/verify.png'
import product_6 from '../../Assets/Images/product_6.jpg'

const Product = ({productData, id}) => {
    const {title, description, price, date} = productData

    const renderActions = () => (
        <CardActions>
            <Grid container spacing = {1}>
                <Grid item xs = {12} sm = {6} md = {6}>
                    <div className = "product-content-icons">
                        <img src = {sellerIcon} alt = "best-seller" />
                        <img src = {verifyIcon} alt = "best-seller" />
                    </div>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {6}>
                    <PrimaryButton label = "STORE" />
                </Grid>
            </Grid>
        </CardActions>
    )

    const renderContent = () => (
        <Box sx = {{ display: 'flex', flexDirection: 'column'}}>
            <CardContent sx = {{ flex: '1 0 auto' }}>
                <span> { title } </span>
                <p className = "product-content-des"> { description } </p>
                <p className = "product-conten-postedOn">Posted On : {date}</p>
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
        { renderActions() }
        </Card>
    )
}

export default Product