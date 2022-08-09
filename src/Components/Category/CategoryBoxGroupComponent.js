import React from 'react'

import Paper from '@mui/material/Paper'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import CategoryIcon from '@mui/icons-material/Category'

const CategoryBoxGroupComponent = () => {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
          title: 'Bed',
        },
        {
          img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
          title: 'Books',
        },
        {
          img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
          title: 'Sink',
        },
        {
          img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
          title: 'Kitchen',
        },
        {
          img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
          title: 'Blinds',
        },
        {
          img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
          title: 'Chairs',
        },
        {
          img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
          title: 'Laptop',
        },
        {
          img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          title: 'Doors',
        },
        {
          img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
          title: 'Storage',
        },
        {
          img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
          title: 'Candle',
        },
        {
          img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
          title: 'Coffee table',
        },
    ]

    const renderCategoryItem = (item, idx) => {
        const {img, title} = item
        return (
            <ImageListItem key = {idx}>
                <img src = {`${img}?w=248&fit=crop&auto=format`}
                    srcSet = {`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt = {title}
                    loading = "lazy"
                />
                <ImageListItemBar
                    sx = {{background: 'rgba(0, 0, 0, 0.4)', height: "30%"}}
                    actionPosition = "left"
                    title = {title}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                        >
                            <CategoryIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
        )
    }

    return (
        <Paper sx = {{ height: 450, overflowY: 'hidden' }} elevation = {3}>
            <ImageList variant = "masonry" cols = {3} gap = {8}>
                { itemData && itemData.map((item, idx) => renderCategoryItem(item, idx) )}
            </ImageList>
        </Paper>
    )
}

export default CategoryBoxGroupComponent