import React from "react"

import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"

const MenuBoxItemWidget = (props) => {
    return(
        <>
            <MenuItem key = {props.item.name}  onClick = {props.handleCloseUserMenu} >
                {
                    props.customIcon
                    &&
                    <props.customIcon color = "info" sx = {{mr:2}}/>
                }
                <Typography textAlign = "center" sx = {{fontSize: "0.85rem", letterSpacing: "0.03rem"}}>{props.item.type}</Typography>
            </MenuItem>
        </>
    )
}

export default MenuBoxItemWidget