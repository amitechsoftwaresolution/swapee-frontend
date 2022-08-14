import React from "react"

import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Grid from "@mui/material/Grid"

import MenuBoxItemWidget from "./MenuBoxItemWidget"

const MenuBoxWidget = (props) => {

    const handleCloseUserMenu = () => {
        props.setAnchorElUser(null)
    }

    const renderMenuItem = (item) => (
        <Grid item sm = {4} md = {4} key = {item.type}>
            <MenuBoxItemWidget
                handleCloseUserMenu = {() => handleCloseUserMenu()}
                item = {item}
                customIcon = {item.icon}
            />
        </Grid>
    )

    const renderMenuItems = () => (
        <Grid container spacing = {1}>
            { props.menuList.map((item) => renderMenuItem(item)) }
        </Grid>
    )

    const renderHeader = () => (
        <Typography sx = {{mt:{xs:1}, p:2}} color = "text.primary" variant = "subtitle1"  noWrap component = "a">
            {props.header}
        </Typography>
    )

    return(
        <>
            <Menu
                PaperProps = {{
                    style: {
                        maxHeight: 300,
                        width: 'auto',
                        maxWidth: '700px',
                        padding: '16px',
                        marginTop: "-15px",
                        borderRadius: '8px 8px 8px 8px',
                        marginLeft: "36%"
                    },
                }}
                sx = {{ 
                    overflow: 'auto', 
                    mt:{xs:'41px', md:'57px'} , 
                    ml:{xs:'15px', md:0}, 
                    '*::-webkit-scrollbar': {
                            width: '0.4em'
                    },
                    '&::-webkit-scrollbar-track': {
                        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,.1)',
                        outline: '1px solid slategrey'
                    }
                }} 
                anchorEl = {props.anchorElUser}
                anchorOrigin = {{vertical: 'top', horizontal: 'right',}} 
                keepMounted 
                open = {Boolean(props.anchorElUser)}
                transformOrigin = {{vertical: 'top', horizontal: 'right'}} 
                onClose = {handleCloseUserMenu}
            >
                { props.header && renderHeader() }
                { renderMenuItems() }
            </Menu>
        </>
    )
}

export default MenuBoxWidget