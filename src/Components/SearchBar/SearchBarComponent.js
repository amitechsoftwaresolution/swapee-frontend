import React from "react"

import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"

import InputWrapperWidget from "../Widgets/InputWrapperWidget"
import IconWrapperWidget from "../Widgets/IconWrapperWidget"
import InputBaseWidget from "../Widgets/InputBaseWidget"

const wrapperContent = () => {
    return(
        <>
            <IconWrapperWidget content = {SearchIcon} />
            <InputBaseWidget placeholder = "Search…" inputProps = {{ 'aria-label': 'search' }} />
        </>
    )
}

const SearchBarComponent = () => {
   return(
       <Box sx = {{display: {xs: 'none', md: 'block'}}}>
           <InputWrapperWidget content = {wrapperContent()} />
       </Box>
   )
}

export default SearchBarComponent