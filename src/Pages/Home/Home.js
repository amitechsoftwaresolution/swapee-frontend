import React, { Component } from 'react'

import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'

import './Home.css'

class Home extends Component {

    products = [
        {
          title:"Sumsung Galaxy J2 Mobile Phone",
          category:"Electronics",
          description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
          date:"25th May 2022"
        },
        // {
        //   title:"Call of Duty: Modern Warfare",
        //   category:"Movies, Music & Games",
        //   description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
        //   date:"12th January 2022"
        // },
        // {
        //   title:"Harry Potter and the Philosopher's Stone",
        //   category:"Books",
        //   description:"Lorem Ipsum is a piece of text, used by designers to fill a space where the content will eventually sit. It helps show how text will look once a piece of content is finished, during the planning phase.",
        //   date:"02nd April 2022"
        // }
    ]

    renderMainContainer = () => {
        return (
            <div className = 'home-main-container'>
                <ImageCarousel data = {this.products}/>
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