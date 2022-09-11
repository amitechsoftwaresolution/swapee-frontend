import React from 'react'

import {Box} from '@mui/material'

const TabPanel = ({value, index, children}) => {
    return (
        <div role = "tabpanel"
            hidden = {value !== index}
            id = {`simple-tabpanel-${index}`}
            aria-labelledby = {`simple-tab-${index}`}
        >
        {value === index && (
            <Box>
                {children}
            </Box>
        )}
        </div>
    )
}

export default TabPanel