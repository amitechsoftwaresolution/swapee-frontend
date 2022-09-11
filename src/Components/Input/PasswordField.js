import React from "react"

import {TextField} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
                color: "rgb(33, 43, 54)"
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

const PasswordField = ({values, handleOnChange, handleShowPasswordOnClick}) => {
    const {name, label, placeholder, value, showPassword, passwordType} = values

    const renderEndAdornment = () => (
        <InputAdornment position = "end">
            <IconButton
                  aria-label = "toggle password visibility"
                  onClick = {handleShowPasswordOnClick}
                  edge = "end"
            >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    )

    return (
        <CssTextField
            fullWidth
            autoComplete = 'off'
            variant = "outlined"
            id = {`outlined-${label}`}
            type = {passwordType}
            placeholder = {placeholder}
            label = {label}
            value = {value}
            name = {name}
            onChange = {handleOnChange}
            InputProps = {{
                endAdornment: renderEndAdornment()
            }}
        />
    )
}

export default PasswordField