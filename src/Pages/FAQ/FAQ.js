import React, { Component } from 'react'

import {Box, Grid} from '@mui/material'

import PageHeader from '../../Components/PageTop/PageHeader'
import ContentLeft from '../../Components/ContentInfo/ContentLeft'
import SearchBarComponent from '../../Components/SearchBar/SearchBarComponent'
import FaqItem from './FaqItem'

import './FAQ.css'
import privacyPolicyImg from '../../Assets/Images/aboutus01.jfif'

class FAQ extends Component {
    state = {
        searchValue: "",
        expanded: 0
    }

    breadcrumbs = ["Home", "Help", "FAQ"]

    dummyFaqs = [
        {id: 1, title: "How can i post my product in this website ?", answer: "This is an answer"},
        {id: 2, title: "How can i post my product in this website ?", answer: "This is an answer"},
        {id: 3, title: "How can i post my product in this website ?", answer: "This is an answer"},
        {id: 4, title: "How can i post my product in this website ?", answer: "This is an answer"},
        {id: 5, title: "How can i post my product in this website ?", answer: "This is an answer"}
    ]
    
    handleSearchOnPress = () => {

    }

    handleFaqItemOnClick = (panel) => (event, newExpanded) => {
        this.setState({expanded: newExpanded ? panel : false})
    }

    handleInputOnChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    renderFaqItem = (item) => {
        const {expanded} = this.state
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <FaqItem 
                    item = {item} 
                    expanded = {expanded}
                    handleChange = {this.handleFaqItemOnClick}
                />
            </Grid>
        )
    }

    renderSearch = () => {
        const {searchValue} = this.state
        return (
            <Grid item xs = {12} sm = {12} md = {12}>
                <SearchBarComponent 
                    placeholder = "Search the knowledge base"
                    name = "searchValue"
                    value = {searchValue}
                    handleOnChange = {this.handleInputOnChange}
                    handleEnterOnPress = {this.handleSearchOnPress}
                />
            </Grid>
        )
    }

    renderContentFaqs = () => {
        
        return (
            <ContentLeft title = "What do you need help with ?" src = {privacyPolicyImg}>
                <div className = 'faq-contents-container'>
                    { this.renderSearch() }
                    <div className = 'faq-items-root'>
                        { this.dummyFaqs.map((item, idx) => {
                            return (
                                <Grid container spacing = {1} key = {idx}>
                                    { this.renderFaqItem(item) }
                                </Grid>
                            )
                        }) }
                    </div>
                </div>
            </ContentLeft>
        )
    }

    renderContents = () => {
        return (
            <div className = 'faq-main-contents'>
                <PageHeader navs = {this.breadcrumbs} />
                <div className = 'faq-intro-container'>
                    { this.renderContentFaqs() } 
                </div>
            </div>
        )
    }

    renderHeaderParallax = () => {
        return (
            <div className = 'faq-header-parallax'>
                <span className = 'header-parallax-title'>FAQ</span>
            </div>
        )
    }

    renderMainContainer = () => {
        return (
            <div className = 'faq-main-container'>
                { this.renderHeaderParallax() }
                <Box sx = {{ flexGrow: 1 }} pt = {3} display = "flex" justifyContent = "center">
                    { this.renderContents() }
                </Box>
            </div>
        )
    }

    render() {
        return (
            <div className = 'faq-page-root'>
                { this.renderMainContainer() }
            </div>
        )
    }
}

export default FAQ