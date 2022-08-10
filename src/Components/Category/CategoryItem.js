import React from "react"

import {IconButton, CardContent} from "@mui/material"
import CategoryIcon from '@mui/icons-material/Category'

import './Category.css'

const CategoryItem = ({item}) => {
    return (
        <div className = 'category-item'>
            <img src = {item.image} alt = "img" width = "100%" />
            <CardContent>
                <div className = 'category-item-info'>
                    <IconButton sx = {{ color: 'rgba(0, 0, 0, 0.54)' }} aria-label = {`info about ${item.title}`}>
                        <CategoryIcon />
                    </IconButton>
                    <span>{item.type}</span>
                </div>
            </CardContent>
        </div>
    )
}

export default CategoryItem