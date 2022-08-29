import React from "react"

import {Box, Grid, Button} from '@mui/material'

import Filter from "../../Components/Filter/Filter"
import PriceFilter from "../../Components/Filter/PriceFilter"
import AccordionComponent from "../../Components/Accordian/Accordian"

import './Category.css'

const Filters = ({
    filters, 
    marks, 
    values, 
    handleFilterCheckBoxToggle,
    handleFilterByPriceOnClick,
    handleFilterClear,
    getCheckedStateAttribute
}) => {

    const renderClearButton = () => (
        <Box sx = {{mt: "25px"}}>
            <Button variant = "contained" fullWidth onClick = {handleFilterClear} sx = {{
                background: 'rgb(198, 40, 40)',
                '&:hover': { background: 'rgb(198, 40, 40)'}
            }}>Clear All</Button>
        </Box>
    )

    const renderFilterButton = () => (
        <Box>
            <Button variant = "outlined" onClick = {handleFilterByPriceOnClick} sx = {{
                border: "2px solid #31e2f2",
                '&:hover': { border: "2px solid #31e2f2" }
            }}>Filter</Button>
        </Box>
    )

    const renderFilterByPrice = () => (
        <Grid item xs = {12} sm = {12} md = {12}>
            <PriceFilter marks = {marks}/>
            <div className = "price-filter-button-container">
                { renderFilterButton() }
            </div>
        </Grid>
    )

    const renderFilter = (name, label, list, idx) => (
        <Grid item xs = {6} sm = {12} md = {12} key = {idx}>
            <Filter 
                label = {label}
                list = {list}
                checked = {values[name]}
                handleToggle = {handleFilterCheckBoxToggle}
            />
        </Grid>
    )

    const renderFilters = () => (
        <Box sx = {{mt: "25px"}}>
            <Grid container spacing = {2}>
                { renderFilterByPrice() }
                { filters.map((item, idx) => {
                    const {label, list} = item
                    const name = getCheckedStateAttribute(label)
                    return renderFilter(name, label, list, idx)
                }) }
            </Grid>
            { renderClearButton() }
        </Box>
    )

    return (
        <div className = "category-filter-root">
            <AccordionComponent title = "FILTER BY">
                { renderFilters() }
            </AccordionComponent>
        </div>
    )
}

export default Filters