import React, { Component } from 'react'

import Post from '../../Components/Post/Post'
import CategorySection from '../../Components/Section/CategorySection'
import FabButton from '../../Components/FabButton/FabButton'

import './Home.css'
import img01 from '../../Assets/Images/img01.jpg'
import img02 from '../../Assets/Images/img02.jpg'

class Home extends Component {
    state = {
        isViewMoreClicked: false,
        categoriesToView: [],
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
            imgs: [img01, img02]
        }
    ]

    sectionDetails = [
        {
          title: "Our Categories",
          description: "We Swapee provide a great amount of services through various categories! Go through our categories and enjoy your commodity exchange."
        }
    ]

    categoryList = [
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
        {type: "Electronics", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg" },
        {type: "Vehicles", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg" },
        {type: "Properties", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg" },
        {type: "Services", image: "https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg" },
    ]

    componentDidMount() {
        this.setState({ categoriesToView: this.categoryList.slice(0, 6) })
    }

    handleViewMoreOnClick = () => {
        const {isViewMoreClicked} = this.state
        let list = isViewMoreClicked ? this.categoryList.slice(0, 6) : this.categoryList

        this.setState({ 
            isViewMoreClicked: !isViewMoreClicked,
            categoriesToView: list
        })
    }

    renderCategorySection = () => {
        const {isViewMoreClicked, categoriesToView} = this.state
        return (
            <CategorySection 
                sectionDetail = {this.sectionDetails[0]} 
                categoryList = {this.categoryList}
                isViewMoreClicked = {isViewMoreClicked}
                categoriesToView = {categoriesToView}
                handleViewMoreOnClick = {this.handleViewMoreOnClick}
            />
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'home-main-container'>
                <Post content = {this.products[0]} />
                { this.renderCategorySection() }
            </div>
        )
    }

    render() {
        return (
            <div className = 'home-page-root'>
                { this.renderMainContainer() }
                <FabButton />
            </div>
        )
    }
}

export default Home