import React from "react"

import './Category.css'

const CategoriesListItem = ({src, label}) => {
    return (
        <div className = "category-list-item-x">
            <div className = "popular_category_image">
                <img src = {src} alt = {label} />
            </div>
            <div className = "popular_category_text">{label}</div>
        </div>
    )
}

export default CategoriesListItem