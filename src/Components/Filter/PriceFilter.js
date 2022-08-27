import React from "react"

import {Box, Slider} from '@mui/material'
import { styled } from '@mui/material/styles'

import './Filter.css'
  
function valuetext(value) {
    return `${value * 10}`
} 

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
})

const PriceFilter = ({marks}) => {
    return (
        <div>
            <span className = 'header_label'>Price</span>
            <Box sx = {{pl: "15px", pr: "15px", pt: "15px", pb: "15px"}}>
                <PrettoSlider
                    valueLabelDisplay = "auto"
                    aria-label = "pretto slider"
                    defaultValue = {10}
                    getAriaValueText = {valuetext}
                    valueLabelFormat = {valuetext}
                    step = {10}
                    marks = {marks}
                />
            </Box>
        </div>
    )
}

export default PriceFilter