import React, { Component } from 'react'

import Post from '../../Components/Post/Post'
import SectionComponent from '../../Components/Section/SectionComponent'
import CategoryBoxGroupComponent from '../../Components/Category/CategoryBoxGroupComponent'

import './Home.css'
import img01 from '../../Assets/Images/img01.jpg'
import img02 from '../../Assets/Images/img02.jpg'

class Home extends Component {

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

    renderMainContainer = () => {
        return (
            <div className = 'home-main-container'>
                <Post content = {this.products[0]} />
                <SectionComponent data = {this.sectionDetails[0]} component = {CategoryBoxGroupComponent} />
            </div>
        )
    }

    render() {
        return (
            <div className = 'home-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default Home