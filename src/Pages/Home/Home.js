import React, { Component } from 'react'

import Post from '../../Components/Post/Post'
import CategorySection from '../../Components/Section/CategorySection'
import FabButton from '../../Components/FabButton/FabButton'
import Loading from '../../Components/Loading/Loading'
import Advertisement from '../../Components/Advertisement/Advertisement'
import ProductSection from '../../Components/Section/ProductSection'

import products from '../../Data/Json/products.json'
import home from '../../Data/Json/home.json'
import paths from '../../Data/Json/paths.json'

import './Home.css'
import img01 from '../../Assets/Images/mobile2.jpg'
import img02 from '../../Assets/Images/mobile3.jpg'
import accessories from '../../Assets/Images/Categories/accessory.png'
import gadget from '../../Assets/Images/Categories/gadget.png'
import fashion from '../../Assets/Images/Categories/fashion.png'

class Home extends Component {
    state = {
        isViewMoreClicked: false,
        categoriesToView: [],
        loading: false
    }

    products = [
        {
            title:"Sumsung Galaxy J2 Mobile Phone",
            category:"Electronics",
            description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
            date:"25th May 2022",
            imgs: [img01, img02]
        },
        {
            title:"Harry Potter and the Philosopher's Stone",
            category:"Books",
            description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
            date:"02nd April 2022",
            imgs: [img02, img01]
        },
    ]

    categoryList = [
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
        { label: "Smartphones", src: fashion },
    ]

    componentDidMount() {
        this.setState({ categoriesToView: this.categoryList.slice(0, 6) })
    }

    handlePostViewOnClick = () => {
        window.location.replace(paths.Ad)
    }

    handlePostStoreOnClick = () => {
        window.location.replace(paths.Store)
    }

    handlePostViewMoreOnClick = () => {
        window.location.replace(paths.Category)
    }

    handleViewMoreOnClick = () => {
        const {isViewMoreClicked} = this.state
        let list = isViewMoreClicked ? this.categoryList.slice(0, 6) : this.categoryList

        this.setState({ 
            isViewMoreClicked: !isViewMoreClicked,
            categoriesToView: list
        })
    }

    renderAdvertisementSection = () => {
        return (
            <div className = 'home-main-adverticement'>
                <Advertisement />
            </div>
        )
    }

    renderPostSections = () => {
        return (
            <ProductSection 
                sectionDetail = {home.posts}
                posts = {products.slice(0, 4)}
                handleViewMoreOnClick = {this.handlePostViewMoreOnClick}
            />
        )
    }

    renderCategorySection = () => {
        const {isViewMoreClicked, categoriesToView} = this.state
        return (
            <CategorySection 
                sectionDetail = {home.categories}
                categoryList = {this.categoryList}
                isViewMoreClicked = {isViewMoreClicked}
                categoriesToView = {categoriesToView}
                handleViewMoreOnClick = {this.handleViewMoreOnClick}
            />
        )
    }

    renderPostContent = (content) => {
        return (
            <Post 
                content = {content} 
                handleViewOnClick = {this.handlePostViewOnClick}
                handleStoreOnClick = {this.handlePostStoreOnClick}
            />
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'home-main-container'>
                { this.renderPostContent(this.products[0]) }
                { this.renderCategorySection() }
                { this.renderAdvertisementSection() }
                { this.renderPostContent(this.products[1]) }
                { this.renderPostSections() }
                { this.renderAdvertisementSection() }
                { this.renderPostContent(this.products[0]) }
                { this.renderAdvertisementSection() }
            </div>
        )
    }

    render() {
        const {loading} = this.state
        return (
            <div className = 'home-page-root'>
                { this.renderMainContainer() }
                <FabButton />
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default Home