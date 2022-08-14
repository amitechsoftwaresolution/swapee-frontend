import React from "react"

import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"

const MenuBoxItemWidget = (props) => {
    const renderListItem = () => (
        <Typography textAlign = "center" sx = {{
                fontSize: "0.85rem", 
                letterSpacing: "0.03rem", 
                '&:hover': {
                    fontWeight: "600",
                }
            }}
        >
            {props.item.type}
        </Typography>
    )

    return(
        <MenuItem key = {props.item.name}  onClick = {props.handleCloseUserMenu} sx = {{
            '&:hover': {
                color: "rgb(0, 171, 85)"
            }
        }}>
            { props.customIcon && <props.customIcon color = "info" sx = {{mr:2}}/> }
            { renderListItem() }
        </MenuItem>
    )
}

export default MenuBoxItemWidget