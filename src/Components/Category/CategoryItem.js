import React from "react"

import {IconButton, CardContent, useMediaQuery} from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category'

import './Category.css'

const CategoryItem = ({item}) => {
    const matches = useMediaQuery('(min-width:800px)')

    return (
        <div className = 'category-item'>
            <img src = {item.src} alt = "img" />
            <CardContent>
                <div className = 'category-item-info'>
                    <IconButton sx = {{ color: 'rgba(0, 0, 0, 0.54)'}} aria-label = {`info about ${item.title}`}>
                        <CategoryIcon sx = {{width: matches ? "25px" : "15px", height: matches ? "25px" : "15px"}}/>
                    </IconButton>
                    <span>{item.label}</span>
                </div>
            </CardContent>
        </div>
    )
}

export default CategoryItem