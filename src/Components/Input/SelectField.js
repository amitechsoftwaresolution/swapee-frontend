import React from 'react'

import {TextField, MenuItem} from '@mui/material'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#31e2f2',
        fontWeight: "600"
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#31e2f2',
    },
    '& .MuiOutlinedInput-root': {
        '& input': {
            '&::placeholder': {
                color: "rgb(33, 43, 54)",
                fontSize: "0.85rem"
            },
            fontSize: "0.85rem"
        },
        '& fieldset': {
            borderColor: '#D7DBDD',
            borderRadius: "10px",
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 1)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#31e2f2',
        },
    },
    '& label': {
        fontSize: "0.85rem"
    }
})

const SelectField = ({name, label, placeholder, value, items, handleOnChange}) => {
    return (
        <CssTextField
            fullWidth
            select
            autoComplete = 'off'
            variant = "outlined"
            id = {`outlined-${label}`}
            placeholder = {placeholder}
            label = {label}
            value = {value}
            name = {name}
            onChange = {handleOnChange}
        >
        { items && items.map((item, idx) => (
            <MenuItem key = {idx} value = {item}>
                {item}
            </MenuItem>
        )) }
        </CssTextField>
    )
}

export default SelectField