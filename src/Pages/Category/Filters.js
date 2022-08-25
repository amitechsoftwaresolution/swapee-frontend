import React from "react"

import {Box, Grid} from '@mui/material'

import Filter from "../../Components/Filter/Filter"

import './Category.css'

const Filters = ({filters, values, handleFilterCheckBoxToggle, getCheckedStateAttribute}) => {

    const renderFilter = (name, label, list, idx) => (
        <Grid item xs = {4} sm = {12} md = {12} key = {idx}>
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
            <Grid container spacing = {2} sx = {{marginTop: "5px"}}>
                { filters.map((item, idx) => {
                    const {label, list} = item
                    const name = getCheckedStateAttribute(label)
                    return renderFilter(name, label, list, idx)
                }) }
            </Grid>
        </Box>
    )

    const renderFilterHeader = () => (
        <div className = 'filter_header'>
            <span className = 'filter_header_title'>Filter by</span>
            <span className = 'filter_header_clear'>Clear</span>
        </div>
    )

    return (
        <div className = "category-filter-root">
            { renderFilterHeader() }
            { renderFilters() }
        </div>
    )
}

export default Filters