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
import homeAdvertisement from '../../Data/Json/homeAdvertisement.json'

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
        premiumProductsResponse : null
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
            let premiumProductsResponse = await getPremiumProducts()
            premiumProductsResponse = "{\r\n    \"success\" : true,\r\n    \"message\": \"succesfully retrieved premium contents\",\r\n    \"data\": {\r\n        \"platinum\":{\r\n           \"title\":\"Sumsung Galaxy J2 Mobile Phone\",\r\n           \"description\":\"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n           \"categoryType\":\"Electronics\",\r\n           \"postDate\":\"25th May 2022\",\r\n           \"imgLinks\":[\r\n              \"https://www.ioshacker.com/wp-content/uploads/2018/04/iPhone-8-PRODUCT-RED-1.jpg\",\r\n              \"https://store.nebula.tv/cdn/shop/files/Extra-History-Wallpapers_2048x2048.jpg?v=1689954469\"\r\n            ]\r\n        },\r\n        \"gold\":{\r\n           \"title\":\"Harry Potter and the Philosopher's Stone\",\r\n           \"description\":\"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n           \"categoryType\":\"Books\",\r\n           \"postDate\":\"02nd April 2022\",\r\n           \"imgLinks\":[\r\n              \"https://www.peterharrington.co.uk/blog/wp-content/uploads/2022/10/HP_5-scaled-e1666611456147.jpg\",\r\n              \"https://i.guim.co.uk/img/media/bd795e208946db0bbb9c8319bd006a31f1bc30df/0_164_3500_2099/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a25a7b65f3fb40ed4c16e8c1f5473650\",\r\n              \"https://media.cnn.com/api/v1/images/stellar/prod/190801105352-01-uk-harry-potter-first-edition-sale.jpg?q=w_2400,h_1416,x_0,y_0,c_fill\"\r\n            ]\r\n        },\r\n        \"bronze\":{\r\n           \"title\":\"Armour T shirt Men's Ultra White Sport Style\",\r\n           \"description\":\"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.\",\r\n           \"categoryType\":\"Accessories\",\r\n           \"postDate\":\"19th October 2023\",\r\n           \"imgLinks\":[\r\n              \"https://media.littlewoods.com/i/littlewoods/MNT7G_SQ1_0000000013_WHITE_MDf?$300x400_retinamobilex2$&$roundel_littlewoods$&p1_img=new_yellow_round\",\r\n              \"https://underarmour.scene7.com/is/image/Underarmour/V5-1373997-100_FC?rp=standard-0pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=566&hei=708&size=566%2C708\"\r\n            ]\r\n        }\r\n    },\r\n    \"error\": {\r\n        \"code\": 0,\r\n        \"message\": \"Failed to retireve premium contents\"\r\n    }\r\n}"
            premiumProductsResponse = JSON.parse(premiumProductsResponse);

            this.setState({loading: false, premiumProductsResponse})
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

    renderAdvertisementSection = (content) => {
        return (
            <div className = 'home-main-adverticement'>
                <Advertisement content = {content}/>
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
        const {premiumProductsResponse} = this.state

        return (
            <div className = 'home-main-container'>
                { premiumProductsResponse.success && premiumProductsResponse.data.platinum ? this.renderPostContent(premiumProductsResponse.data.platinum) : <></> }
                { this.renderCategorySection() }
                { this.renderAdvertisementSection(homeAdvertisement.data.image_list) }
                { premiumProductsResponse.success && premiumProductsResponse.data.gold ? this.renderPostContent(premiumProductsResponse.data.gold) : <></> }
                { this.renderPostSections() }
                { this.renderAdvertisementSection() }
                { premiumProductsResponse.success && premiumProductsResponse.data.bronze ? this.renderPostContent(premiumProductsResponse.data.bronze) : <></> }
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