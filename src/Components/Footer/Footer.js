import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import LogoComponent from "../Logo/LogoComponent"

import {footerQuickLinks, footerSocialLinks, footerFindFastLinks} from '../../Data/Values/Values'

import './Footer.css'

const Footer = () => {
    const matches = useMediaQuery('(min-width:800px)')

    const SOCIAL_ICONS = {
        "Facebook": <FacebookIcon sx = {{width: "100%", height: "100%"}}/>,
        "Twitter": <TwitterIcon sx = {{width: "100%", height: "100%"}}/>,
        "Instagram": <InstagramIcon sx = {{width: "100%", height: "100%"}}/>,
        "LinkedIn": <LinkedInIcon sx = {{width: "100%", height: "100%"}}/>
    }

    const renderLink = (href, label) => (
        <Link href = {href} sx = {{textDecoration: 'none !important', color: "#fff", fontSize: matches ? "0.7rem": "0.65rem"}}>
            {label}
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
                    <div className = 'wrapper_item-caption-des'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                    </div>
                    <div className = "footer-social">
                        { footerSocialLinks.map((item, idx) => {
                            const {url, label} = item
                            return (
                                <a href = {url} target = "_blank" rel = "noreferrer noopener" key = {idx}>
                                    { SOCIAL_ICONS[label] }
                                </a>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

    const renderFindFastLinks = () => {
        return (
            <div className = "content_wrapper_items_right">
                <div className = "wrapper_item-caption">
                    <p>Find It Fast</p>
                    <List className = "content">
                        {footerFindFastLinks.map((item, idx) => {
                            const {href, label} = item
                            return (
                                <ListItem key = {idx}>
                                    { renderLink(href, label) }
                                </ListItem>
                            )
                        })}
                    </List>
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
                        {footerQuickLinks.map((item, idx) => {
                            const {href, label} = item
                            return (
                                <ListItem key = {idx}>
                                    { renderLink(href, label) }
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
                        <PhoneIcon style = {{ fontSize: matches ? 25 : 20, marginRight:10 }} />
                        { renderLink("tel:+94 11 2222222", "+94 11 2222222") }
                    </ListItem>
                    <ListItem>
                        <MailIcon style = {{ fontSize: matches ? 25 : 20, marginRight:10 }} />
                        { renderLink("mailto:swapee@gmail.lk", "swapee@gmail.lk") }
                    </ListItem>
                    <ListItem>
                        <LocationOnIcon style = {{ fontSize: matches ? 25 : 20, marginRight:10 }} />
                        <span style = {{color: "#fff", fontSize: matches ? "0.7rem": "0.65rem"}}>
                            No 25 Ananda Rajakaruna Mawatha Colombo 10
                        </span>
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
                        <Grid item xs = {6} sm = {4} md = {2}>
                            { renderLinks() }
                        </Grid>
                        <Grid item xs = {6} sm = {4} md = {2}>
                            { renderFindFastLinks() }
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
        <div className = 'shadow'>
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