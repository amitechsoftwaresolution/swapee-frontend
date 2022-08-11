import React from 'react'

import {styled} from "@mui/material/styles"

const IconWrapperWidget = (props) => {
    const IconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    return (
        <>
            <IconWrapper><props.content/></IconWrapper>
        </>
    )
}

export default IconWrapperWidget