import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import SectionHeaderComponent from "./SectionHeaderComponent"

const SectionComponent = (props) => {

    const renderContainer = () => (
        <Grid container spacing = {3}>
            <Grid item xs = {12} sm = {12} md = {5}>
                <SectionHeaderComponent data = {props.data}/>
            </Grid>
            <Grid item xs = {12} sm = {12} md = {7}> 
                <props.component/>
            </Grid>
        </Grid>
    )

    return (
        <div>
            <Box sx = {{
                    backgroundColor:'', // #f5f5f5
                    pl:'60px', 
                    pr:'60px', 
                    pt:'50px',
                    pb:'30px'
                }}
            >
                { renderContainer() }
            </Box>
        </div>
    )
}

export default SectionComponent