import React from "react"

import {MenuItem} from "@mui/material"

import { Link } from "react-router-dom"

import paths from "../../Data/Json/paths.json"

const MenuBoxItemWidget = (props) => {

    const renderListItem = () => (
        <Link to = {paths.Category} style = {{
            fontSize: "0.8rem", 
            letterSpacing: "0.05rem", 
            fontWeight: "550",
            textDecoration: "none",
            color: "#000"
        }}>
            {props.item.type}
        </Link>
    )

    return(
        <MenuItem key = {props.item.name} onClick = {props.handleCloseUserMenu}>
            { props.customIcon && <props.customIcon color = "info" sx = {{mr:2}}/> }
            { renderListItem() }
        </MenuItem>
    )
}

export default MenuBoxItemWidget