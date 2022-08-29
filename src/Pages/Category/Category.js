import React, { Component } from 'react'

import {Box, Grid, Button} from '@mui/material'
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight'
import FilterAlt from '@mui/icons-material/FilterAlt'

import OtherCategoriesList from './OtherCategoriesList'
import Filters from './Filters'
import SearchBarComponent from '../../Components/SearchBar/SearchBarComponent'
import Paginator from '../../Components/Pagination/Paginator'
import Product from '../../Components/Product/Product'
import Post from '../../Components/Post/Post'
import FabButton from '../../Components/FabButton/FabButton'
import Loading from '../../Components/Loading/Loading'
import PageHeader from '../../Components/PageTop/PageHeader'

import './Category.css'
import accessories from '../../Assets/Images/Categories/accessory.png'
import gadget from '../../Assets/Images/Categories/gadget.png'
import fashion from '../../Assets/Images/Categories/fashion.png'
import img01 from '../../Assets/Images/img01.jpg'
import img02 from '../../Assets/Images/img02.jpg'

import products from '../../Data/Json/products.json'

class Category extends Component {
    state = {
        categoryChecked: [],
        genreChecked: [],
        searchValue: "",
        total: 10,
        current: 1,
        loading: false
    }

    breadcrumbs = ["Products", "Electronics"]

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

    posts = [
        {
            title:"Sumsung Galaxy J2 Mobile Phone",
            category:"Electronics",
            description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
            date:"25th May 2022",
            imgs: [img01, img02]
        },
    ]

    handleSearchOnPress = () => {

    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handlePaginationOnChange = (event, page) => {
        this.setState({ current: page })
    }

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

    renderNoDataAvailable = () => {
        return (
            <div className = "no_data_container">
                <div className = "no_data">
                    <h2>No Data Available</h2>
                </div>
            </div>
        )
    }

    renderPagination = () => {
        const {total, current} = this.state
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'category_list-pagination-root'>
                    <Paginator 
                        count = {total} 
                        page = {current} 
                        onChange = {this.handlePaginationOnChange}
                    />
                </div>
            </Grid>
        )
    }

    renderList = () => {
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'category_list-block-root'>
                    <Grid container spacing = {2}>
                        { products.map((item, idx) => {
                            return (
                                <Grid item xs = {6} sm = {6} md = {4} key = {idx}>
                                    <Product productData = {item} id = {idx}/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </div>
            </Grid>
        )
    }

    renderSearch = () => {
        const {searchValue} = this.state
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <div className = 'category-search-root'>
                    <SearchBarComponent 
                        placeholder = "Search"
                        name = "searchValue"
                        value = {searchValue}
                        handleOnChange = {this.handleInputOnChange}
                        handleEnterOnPress = {this.handleSearchOnPress}
                    />
                </div>
            </Grid>
        )
    }

    renderFilters = () => {
        return (
            <Filters 
                filters = {this.filters}
                marks = {this.marks}
                values = {this.state}
                handleFilterCheckBoxToggle = {this.handleFilterCheckBoxToggle}
                getCheckedStateAttribute = {this.getCheckedStateAttribute}
                handleFilterClear = {this.handleFilterClear}
                handleFilterByPriceOnClick = {this.handleFilterByPriceOnClick}
            />
        )
    }

    renderListHeader = () => {
        const {searchValue} = this.state
        return (
            <div className = 'category-list-block-con-head'>
                <div className = 'category-list-block-con-head-title'>
                    <h3>Posts</h3>
                    <KeyboardDoubleArrowRight sx = {{
                        width: "20px", 
                        height: "20px", 
                        mr: "5px", 
                        ml: "5px", 
                        color: "rgb(158, 158, 158)"}}
                    />
                    <div className = 'showing-post-count-root'>
                        <h5>Showing : </h5>
                        <span>10 Products</span>
                    </div>
                </div>
                <div className = 'category-list-block-con-head-search-sort'>
                    <Grid container sx = {{alignItems: "center"}}>
                        <Grid item xs = {12} sm = {12} md = {6} sx = {{display: "flex", justifyContent: "flex-end"}}>
                            <div className = 'category-list-block-con-head-search-sortby'>
                                <FilterAlt sx = {{
                                    width: "20px", 
                                    height: "20px", 
                                    mr: "5px", 
                                    ml: "5px", 
                                    color: "rgb(179, 157, 219)" 
                                }}/>
                                <Button variant = "text" sx = {{fontSize: "0.8rem", fontWeight: "550"}}>
                                    Sort By Price: 
                                </Button>
                                <span>Low To High</span>
                            </div>
                            <p>|</p>
                        </Grid>
                        <Grid item xs = {12} sm = {12} md = {6}>
                            <SearchBarComponent 
                                placeholder = "Search"
                                name = "searchValue"
                                value = {searchValue}
                                handleOnChange = {this.handleInputOnChange}
                                handleEnterOnPress = {this.handleSearchOnPress}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    renderCategoryListBlock = () => {
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { this.renderListHeader() }
                </Grid>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <Grid container spacing = {2}>
                        <Grid item xs = {12} sm = {5} md = {3}>
                            { this.renderFilters() }
                        </Grid>
                        <Grid item xs = {12} sm = {7} md = {9}>
                            { this.renderList() }
                            <div className = 'pagination-block-root'>
                                { this.renderPagination() }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    renderContents = () => {
        return (
            <div className = 'category-page-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <div className = 'categorie-list-block-root'>
                    { this.renderCategoryListBlock() }
                </div>
                <div className = 'popular-categories-root'>
                    <OtherCategoriesList otherCategories = {this.otherCategories}/>
                </div>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'category-page-main-container'>
                <Post content = {this.posts[0]} />
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'category-page-root'>
                { this.renderMainContainer() }
                <FabButton />
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default Category