import React, { Component } from 'react'

import { useLocation } from "react-router-dom"

import {Box, Grid} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import StorePageCover from './StorePageCover'
import ListHeader from '../../Components/ListHeader.js/ListHeader'
import Filters from './Filters'
import Paginator from '../../Components/Pagination/Paginator'
import Product from '../../Components/Product/Product'
import FabButton from '../../Components/FabButton/FabButton'
import Loading from '../../Components/Loading/Loading'

import products from '../../Data/Json/products.json'

import './Store.css'

function withLocation(Component) {
    return props => <Component {...props} location = {useLocation()} />
}

class Store extends Component {
    state = {
        searchValue: "",
        postCount: 10,
        total: 10,
        current: 1,
        loading: false,
        categoryChecked: [],
        genreChecked: [],
    }

    breadcrumbs = ["Home", "Store"]

    componentDidMount() {
        console.log(this.props.location.state)
        window.scrollTo(0, 0)
    }

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

    renderPostListBlock = () => {
        const {postCount, searchValue} = this.state
        return (
            <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    <ListHeader 
                        title = "Posts"
                        count = {`${postCount} posts`}
                        searchValue = {searchValue}
                        handleInputOnChange = {this.handleInputOnChange}
                        handleSearchOnPress = {this.handleSearchOnPress}
                    />
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
            <div className = 'store-page-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <StorePageCover />
                <div className = 'store-page-posts-list-root'>
                    { this.renderPostListBlock() }
                </div>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'store-page-main-container'>
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'store-page-root'>
                { this.renderMainContainer() }
                <FabButton />
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default withLocation(Store)