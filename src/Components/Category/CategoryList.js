import React from 'react'

import './Category.css'

const CategoryList = ({data}) => {
    return (
        <div className = "category-tabs-container">
            <ul className="category-tabs">
                { data && data.map((item, idx) => {
                    const {type} = item
                    return (
                        <li className = "category-tabs-item" key = {idx}>
                            <a className = "category-tabs-link" href = "/">
                                <span className = "text">{type}</span>
                            </a>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default CategoryList