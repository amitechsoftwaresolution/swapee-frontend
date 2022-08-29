import React, {useState} from "react"

import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import { styled } from "@mui/material/styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"

const Accordion = styled((props) => ( <MuiAccordion disableGutters elevation = {0} square {...props} />
))(({ theme }) => ({
    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon = {<ArrowForwardIosSharpIcon sx = {{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "10px",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
    }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(1)
}))

const AccordionComponent = ({title, children}) => {
    const [expanded, setExpanded] = useState(title)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    
    const renderAccordionSummary = () => (
        <AccordionSummary expandIcon = {<ExpandMoreIcon />} id = {`panel1a-header-${title}`}>
            <span style = {{fontSize: "0.9rem", fontWeight: "550", letterSpacing: "0.04rem"}}>{title}</span>
        </AccordionSummary>
    )

    return (
        <Accordion expanded = {expanded === title} onChange = {handleChange(title)}>
            { renderAccordionSummary(title) }
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent