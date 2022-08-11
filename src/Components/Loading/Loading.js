import React from "react"

import { Backdrop, Stack, Typography } from '@mui/material'

import loader from '../../Assets/Images/Common/loader.png'

import './Loading.css'

const Loading = ({open}) => {
    return (
        <Backdrop sx = {{zIndex: 2, color: "#fff"}} open = {open}>
            <Stack>
                <img src = {loader} width = {125} height = {125} className = "spin" alt = "loader" />
                <Typography 
                    variant = "body2"
                    component = "div" 
                    align = 'center' 
                    className = 'primary-font' 
                    style = {{ fontWeight: 900 }}
                >
                    Loading...
                </Typography>
            </Stack>
        </Backdrop>
    )
}

export default Loading