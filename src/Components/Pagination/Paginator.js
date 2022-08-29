import React from "react"

import Pagination from '@mui/material/Pagination'

const Paginator = ({count, page, onChange}) => {
    return (
        <Pagination
            count = {count} 
            color = "primary"
            page = {page}
            onChange = {onChange}
            shape = "rounded"
            sx = {{
                "& .MuiPaginationItem-root": {
                    color: "#000",
                },
                "& .MuiPaginationItem-outlinedSecondary.Mui-selected": {
                    backgroundColor: "#31e2f2", 
                    backdropFilter: "blur(4px)"
                }
            }}
        />
    )
}

export default Paginator