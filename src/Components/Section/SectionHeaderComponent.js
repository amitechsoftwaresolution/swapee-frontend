import React from "react"

import Typography from "@mui/material/Typography"

const SectionHeaderComponent = (props) => {
    const heading = (variant, text, txtTransform) => {
        return <Typography
            sx = {{pt:0}}
            component = "h1" 
            variant = {variant} 
            align = "center" 
            color = "text.primary" 
            gutterBottom
            textTransform = {txtTransform}
        >
            {text}
        </Typography>
    }

    return(
        <div>
            { heading("h4", props.data.title, "uppercase") }
            { heading("body1", props.data.description, "lowercase") }
        </div>
    )
}

export default SectionHeaderComponent