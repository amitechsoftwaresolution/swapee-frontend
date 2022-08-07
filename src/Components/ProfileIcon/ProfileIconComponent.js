import React from "react"

import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"

import MenuBoxWidget from "../Widgets/MenuBoxWidget"

const ProfileIconComponent = (props) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    return(
        <>
            <Box sx = {{flexGrow:0}}>
                <Tooltip title = {props.tooltip}>
                    <IconButton onClick = {handleOpenUserMenu} >
                        <Avatar alt = {props.username} src = {props.src}  sx = {{backgroundColor:'#4b4e5f', width: "30px", height: "30px"}}/>
                    </IconButton>
                </Tooltip>
                <MenuBoxWidget
                    menuList = {props.menuList}
                    anchorElUser = {anchorElUser}
                    setAnchorElUser = {() => setAnchorElUser()}
                    header = "Hi Mino!"
                />
            </Box>
        </>
    )
}

export default ProfileIconComponent