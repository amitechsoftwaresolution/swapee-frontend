import React, { Component } from 'react'

import { useNavigate } from "react-router-dom"

import Post from '../../Components/Post/Post'
import CategorySection from '../../Components/Section/CategorySection'
import FabButton from '../../Components/FabButton/FabButton'
import Loading from '../../Components/Loading/Loading'
import Advertisement from '../../Components/Advertisement/Advertisement'
import ProductSection from '../../Components/Section/ProductSection'
import ApiError from '../../Components/ApiError/ApiError'

import products from '../../Data/Json/products.json'
import home from '../../Data/Json/home.json'
import paths from '../../Data/Json/paths.json'

import './Home.css'
import accessories from '../../Assets/Images/Categories/accessory.png'
import gadget from '../../Assets/Images/Categories/gadget.png'
import fashion from '../../Assets/Images/Categories/fashion.png'

import { getPremiumProducts } from '../../Api/premiumProducts'
import SkeletonChildren from '../../Components/Skeleton/loadingSkeleton'

function withNavigate(Component) {
    return props => <Component {...props} navigate = {useNavigate()} />
}

class Home extends Component {
    state = {
        isViewMoreClicked: false,
        categoriesToView: [],
        loading: true,
        error: false,
        apiResponse : null
    }

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
        this.fetchData()
    }

    fetchData = async() => {
        try {
            let response = await getPremiumProducts()
            response = "{\r\n    \"postContent\" : [\r\n        {\r\n            \"title\" : \"Sumsung Galaxy J2 Mobile Phone\",\r\n            \"description\" : \"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n            \"categoryType\" : \"Electronics\",\r\n            \"postDate\" : \"25th May 2022\",\r\n            \"imgLinks\" : [\r\n                \"https://www.ioshacker.com/wp-content/uploads/2018/04/iPhone-8-PRODUCT-RED-1.jpg\",\r\n                \"https://store.nebula.tv/cdn/shop/files/Extra-History-Wallpapers_2048x2048.jpg?v=1689954469\"\r\n            ]\r\n        },\r\n        {\r\n            \"title\" : \"Harry Potter and the Philosopher's Stone\",\r\n            \"description\" : \"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n            \"categoryType\" : \"Books\",\r\n            \"postDate\" : \"02nd April 2022\",\r\n            \"imgLinks\" : [\r\n                \"https://www.peterharrington.co.uk/blog/wp-content/uploads/2022/10/HP_5-scaled-e1666611456147.jpg\",\r\n                \"https://i.guim.co.uk/img/media/bd795e208946db0bbb9c8319bd006a31f1bc30df/0_164_3500_2099/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a25a7b65f3fb40ed4c16e8c1f5473650\",\r\n                \"https://media.cnn.com/api/v1/images/stellar/prod/190801105352-01-uk-harry-potter-first-edition-sale.jpg?q=w_2400,h_1416,x_0,y_0,c_fill\"\r\n            ]\r\n        },\r\n        {\r\n            \"title\" : \"Harry Potter and the Philosopher's Stone\",\r\n            \"description\" : \"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n            \"categoryType\" : \"Books\",\r\n            \"postDate\" : \"02nd April 2022\",\r\n            \"imgLinks\" : [\r\n                \"https://www.peterharrington.co.uk/blog/wp-content/uploads/2022/10/HP_5-scaled-e1666611456147.jpg\",\r\n                \"https://i.guim.co.uk/img/media/bd795e208946db0bbb9c8319bd006a31f1bc30df/0_164_3500_2099/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a25a7b65f3fb40ed4c16e8c1f5473650\",\r\n                \"https://media.cnn.com/api/v1/images/stellar/prod/190801105352-01-uk-harry-potter-first-edition-sale.jpg?q=w_2400,h_1416,x_0,y_0,c_fill\"\r\n            ]\r\n        }\r\n    ]\r\n}"
            response = JSON.parse(response)
            this.setState({loading: false, apiResponse: response})
        } catch (e) {
            console.log(e)
            this.setState({loading: false, error: true})
        }
    }

    handlePostViewOnClick = () => {
        this.props.navigate(paths.Ad, { state: {} })
    }

    handlePostStoreOnClick = () => {
        this.props.navigate(paths.Store, { state: {} })
    }

    handlePostViewMoreOnClick = () => {
        this.props.navigate(paths.Category, { state: {} })
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
        const {apiResponse} = this.state

        return (
            <div className = 'home-main-container'>
                { this.renderPostContent(apiResponse.postContent[0]) }
                { this.renderCategorySection() }
                { this.renderAdvertisementSection() }
                { this.renderPostContent(apiResponse.postContent[1]) }
                { this.renderPostSections() }
                { this.renderAdvertisementSection() }
                { this.renderPostContent(apiResponse.postContent[2]) }
                { this.renderAdvertisementSection() }
                <FabButton />
            </div>
        )
    }

    renderErrorContent = () => {
        return (
            <div className = 'home-main-container'>
                <ApiError />
            </div>
        )
    }

    renderLoadingSkeleton = () => {
        return (
            <div className = 'home-main-container'>
                <SkeletonChildren />
            </div>
        )
    }

    render() {
        const {loading, error} = this.state
        return (
            <div className = 'home-page-root'>
                { error ? this.renderErrorContent() : loading ? this.renderLoadingSkeleton() : this.renderMainContainer() }
                { loading && <Loading open = {loading} /> }
            </div>
        )
    }
}

export default withNavigate(Home)