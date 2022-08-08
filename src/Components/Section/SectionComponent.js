import React from "react"

import Box from "@mui/material/Box"

import SectionHeaderComponent from "./SectionHeaderComponent"

const SectionComponent = (props) => {
    return (
        <div>
            <Box sx = {{
                    backgroundColor:'', // #f5f5f5
                    pl:'100px', 
                    pr:'100px', 
                    pt:'30px',
                    pb:'30px'
                }}
            >
                <SectionHeaderComponent data = {props.data}/>
                <props.component/>
            </Box>
        </div>
    )
}

export default SectionComponent