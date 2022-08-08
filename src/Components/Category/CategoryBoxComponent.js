import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'

import './Category.css'

const CategoryBoxComponent = (props) => {
    const imgSize = 125

    const renderCategoryMedia = () => (
        <CardMedia align = "center" sx = {{paddingTop: 5}}>
            <div className = 'shadow' style = {{width: imgSize, height: imgSize}}>
                <img 
                    src = {props.image} 
                    width = {imgSize} 
                    height = {imgSize}
                    className = "img"
                    alt = {props.type}
                />
            </div>
        </CardMedia>
    )

    const renderCategoryContent = () => (
        <CardContent sx = {{color: 'white', fontSize: '5px'}}>   
            <Typography 
                gutterBottom 
                variant = "body2" 
                component = "div" 
                align = 'center' 
                className = 'primary-font' 
                style = {{ fontWeight: 600 }}
            >
                {props.type}
            </Typography>
        </CardContent>
    )

    return (
        <Card sx = {{ width: 180, height: 250, backgroundColor: props.bgColor}}>
            <CardActionArea>
                { renderCategoryMedia() }
                { renderCategoryContent() }
            </CardActionArea>
        </Card>
    )
}

export default CategoryBoxComponent