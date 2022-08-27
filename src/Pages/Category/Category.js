import React, { Component } from 'react'

import {Box, Grid} from '@mui/material'

import PageTop from '../../Components/PageTop/PageTop'
import OtherCategoriesList from './OtherCategoriesList'
import Filters from './Filters'

import './Category.css'
import accessories from '../../Assets/Images/Categories/accessory.png'
import gadget from '../../Assets/Images/Categories/gadget.png'
import fashion from '../../Assets/Images/Categories/fashion.png'

class Category extends Component {
    state = {
        categoryChecked: [],
        genreChecked: [],
        filterByPrice: false
    }

    breadcrumbs = ["Category", "Fashion"]

    otherCategories = [
        { label: "Accessories", src: accessories },
        { label: "Gadgest", src: gadget },
        { label: "Smartphones", src: fashion },
        { label: "Accessories", src: accessories },
        { label: "Gadgest", src: gadget },
        { label: "Smartphones", src: fashion },
        { label: "Accessories", src: accessories },
        { label: "Gadgest", src: gadget },
        { label: "Smartphones", src: fashion },
        { label: "Accessories", src: accessories },
        { label: "Gadgest", src: gadget },
        { label: "Smartphones", src: fashion }
    ]

    filters = [
        {label: "Category", list: ["Men", "Women", "Kid"]},
        {label: "Genre", list: ["Action", "Adventure", "Comedy"]}
    ]

    marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 10,
          label: '100',
        },
        {
          value: 50,
          label: '500',
        },
        {
          value: 100,
          label: '> 1000',
        },
    ]

    handleFilterCheckBoxToggle = (label, index) => {
        let name = this.getCheckedStateAttribute(label)

        const checked = this.state[name]
        const currentIndex = checked.indexOf(index)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(index)
        } 
        else {
            newChecked.splice(currentIndex, 1)
        }

        this.setState({ [name]: newChecked })
    }

    handleFilterClear = () => {
        this.setState({ categoryChecked: [], genreChecked: []})
    }

    handleFilterByPriceOnClick = () => {
        this.setState({ filterByPrice: !this.state.filterByPrice })
    }

    getCheckedStateAttribute = (label) => {
        let name = "categoryChecked"

        switch(label) {
            case "Category": name = "categoryChecked"
                break
            case "Genre": name = "genreChecked"
                break
            default: return name
        }

        return name
    }

    renderCategoryListBlock = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {5} md = {3}>
                    <Filters 
                        filters = {this.filters}
                        marks = {this.marks}
                        values = {this.state}
                        handleFilterCheckBoxToggle = {this.handleFilterCheckBoxToggle}
                        getCheckedStateAttribute = {this.getCheckedStateAttribute}
                        handleFilterClear = {this.handleFilterClear}
                        handleFilterByPriceOnClick = {this.handleFilterByPriceOnClick}
                    />
                </Grid>
                <Grid item xs = {12} sm = {7} md = {9}></Grid>
            </Grid>
        )
    }

    renderContents = () => {
        return (
            <div className = 'category-page-main-contents'>
                <div className = 'popular-categories-root'>
                    <OtherCategoriesList otherCategories = {this.otherCategories}/>
                </div>
                <div className = 'categorie-list-block-root'>
                    { this.renderCategoryListBlock() }
                </div>
            </div>
        )
    }

    renderHeaderParallax = () => {
        return (
            <div className = 'category-page-parallax'>
                <span className = 'header-parallax-title'>Explore more with us</span>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'category-page-main-container'>
                { this.renderHeaderParallax() }
                <PageTop breadcrumbs = {this.breadcrumbs} subHead = "Categories"/>
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'category-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default Category