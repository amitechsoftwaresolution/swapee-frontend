import React from "react"

import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"

import MenuBoxItemWidget from "./MenuBoxItemWidget"

const MenuBoxWidget = (props) => {

    const handleCloseUserMenu = () => {
        props.setAnchorElUser(null)
    }

    return(
        <>
            <Menu
                PaperProps = {{
                    style: {
                        maxHeight: 200,
                        width: 'auto',
                        maxWidth: '180px',
                        padding: '16px',
                        marginTop: "-8px",
                        borderRadius: '0px 0px 8px 8px',
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

                {
                    props.header
                    &&
                    <Typography sx = {{mt:{xs:1}, p:2}} color = "text.primary" variant = "subtitle1"  noWrap component = "a">
                        {props.header}
                    </Typography>
                }

                {props.menuList.map((item) => (
                    <MenuBoxItemWidget
                        handleCloseUserMenu = {() => handleCloseUserMenu()}
                        item = {item}
                        key = {item.type}
                        customIcon={item.icon}
                    />
                ))}
            </Menu>
        </>
    )
}

export default MenuBoxWidget