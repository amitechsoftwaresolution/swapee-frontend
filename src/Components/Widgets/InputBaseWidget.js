import React from 'react'

import {styled} from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"

const InputBaseWidget = (props) => {
    const InputBaseArea = styled(InputBase)(({ theme }) => ({
        rows:3,
        multiline:true,
        fullWidth:true,
        maxRows:5,
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }))

    return (
        <>
            <InputBaseArea placeholder = {props.placeholder} inputProps = {props.inputProps}>
                <InputBase></InputBase>
            </InputBaseArea>
        </>
    )
}

export default InputBaseWidget