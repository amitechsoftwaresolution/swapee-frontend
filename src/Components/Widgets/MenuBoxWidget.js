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
                        borderRadius: '5%'
                    },
                }}
                sx = {{ overflow: 'auto', mt:{xs:'41px', md:'57px'} , ml:{xs:'15px', md:0}}} anchorEl = {props.anchorElUser}
                    anchorOrigin = {{vertical: 'top', horizontal: 'right',}} keepMounted open = {Boolean(props.anchorElUser)}
                    transformOrigin = {{vertical: 'top', horizontal: 'right',}} onClose = {handleCloseUserMenu}>

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