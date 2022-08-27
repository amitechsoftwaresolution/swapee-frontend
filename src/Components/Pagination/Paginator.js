import React from "react"

import Pagination from '@mui/material/Pagination'

const Paginator = ({count, page, onChange}) => {
    return (
        <Pagination
            count = {count} 
            variant = "outlined" 
            color = "primary"
            page = {page}
            onChange = {onChange}
            sx = {{
                "& .MuiPaginationItem-root": {
                    color: "#31e2f2",
                    fontWeight: "bold"
                },
                "& .MuiPaginationItem-outlinedSecondary.Mui-selected": {
                    backgroundColor: "rgba(255, 255, 255, .15)", 
                    backdropFilter: "blur(4px)"
                }
            }}
        />
    )
}

export default Paginator