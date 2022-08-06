import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import LogoComponent from "../Logo/LogoComponent"

import './Footer.css'

const Footer = () => {

    const SOCIAL_LINKS = [
        {id: "1", url: "https://www.facebook.com", title: "Facebook"},
        {id: "2", url: "https://twitter.com", title: "Twitter"},
        {id: "3", url: "https://www.instagram.com", title: "Instagram"},
        {id: "4", url: "https://www.linkedin.com", title: "LinkedIn"}
    ]

    const QUICK_LINKS = [
        {id : "1", href : "#", title: "About Us"},
        {id : "2", href : "#", title: "Privacy Policy"},
        {id : "3", href : "#", title: "Tearms and Conditions"}
    ]

    const SOCIAL_ICONS = {
        "Facebook": <FacebookIcon sx = {{width: "100%", height: "100%"}}/>,
        "Twitter": <TwitterIcon sx = {{width: "100%", height: "100%"}}/>,
        "Instagram": <InstagramIcon sx = {{width: "100%", height: "100%"}}/>,
        "LinkedIn": <LinkedInIcon sx = {{width: "100%", height: "100%"}}/>
    }

    const renderLink = (href, title) => (
        <Link href = {href} sx = {{textDecoration: 'none !important', color: "#fff"}}>
            {title}
        </Link>
    )

    const renderLogoComponent = () => (
        <Box display = "flex" justifyContent = "center" sx = {{pt: 0}}>
            <LogoComponent textColor = "text.primary" position = "center" />
        </Box>
    )

    const renderSocials = () => {
        return (
            <div className = "content_wrapper_items_left">
                <div className = "wrapper_item-caption">
                    <p>Follow us</p>
                    <div className = "footer-social">
                        { SOCIAL_LINKS.map(item => {
                            const {id, url, title} = item
                            return (
                                <a href = {url} target = "_blank" rel = "noreferrer noopener" key = {id}>
                                    { SOCIAL_ICONS[title] }
                                </a>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

    const renderLinks = () => {
        return (
            <div className = "content_wrapper_items_right">
                <div className = "wrapper_item-caption">
                    <p>Quick Links</p>
                    <List className = "content">
                        {QUICK_LINKS.map(item => {
                            const {id, href, title} = item
                            return (
                                <ListItem key = {id}>
                                    { renderLink(href, title) }
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </div>
        )
    }

    const renderContactUs = () => (
        <div className = "content_wrapper_items_right">
            <div className = "wrapper_item-caption">
                <p>Contact Us</p>
                <List className = "content">
                    <ListItem>
                        <PhoneIcon style = {{ fontSize:25, marginRight:10 }} />
                        { renderLink("tel:+94 11 2222222", "+94 11 2222222") }
                    </ListItem>
                    <ListItem>
                        <MailIcon style = {{ fontSize:25, marginRight:10 }} />
                        { renderLink("mailto:swapee@gmail.lk", "swapee@gmail.lk") }
                    </ListItem>
                    <ListItem>
                        <LocationOnIcon style = {{ fontSize:25, marginRight:10 }} />
                        <span style = {{color: "#fff"}}>No 25 Ananda Rajakaruna Mawatha Colombo 10</span>
                    </ListItem>
                </List>
            </div>
        </div>
    )

    const renderFooterMainContent = () => {
        return (
            <div className = 'footer_main_content_wrapper'>
                <div className = 'content_wrapper_logo'>
                    { renderLogoComponent() }
                </div>
                <div className = "content_wrapper_items">
                    <Grid container>
                        <Grid item xs = {12} sm = {4} md = {4}>
                            { renderSocials() }
                        </Grid>
                        <Grid item xs = {12} sm = {8} md = {4}>
                            { renderLinks() }
                        </Grid>
                        <Grid item xs = {12} sm = {8} md = {4}>
                            { renderContactUs() }
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }

    const renderFooterBottom = () => {
        return (
            <div className = "footer_bottom">
                <div className = "footer_bottom_content_wrapper">
                    <div className = "footer_bottom_copyrights">
                        <p>
                            Copyright © 2022 All rights reserved 
                            | Designed by <i className = "fa fa-heart color-primary" aria-hidden = "true"/> 
                            <span> AmiTech Software Solution </span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className = 'footer_root'>
                <div className = 'footer_container'>
                    { renderFooterMainContent() }
                    <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.2)", marginTop: "5px", marginRight: "25px"}}/>
                    { renderFooterBottom() }
                </div>
            </div>
        </div>
    )
}

export default Footer