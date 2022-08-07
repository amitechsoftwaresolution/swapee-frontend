import React, { Component } from 'react'

import './Home.css'

class Home extends Component {

    renderMainContainer = () => {
        return (
            <span>Home</span>
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