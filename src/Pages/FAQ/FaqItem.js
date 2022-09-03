import React from 'react'

import {Grid} from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import { styled } from "@mui/material/styles"

import './FAQ.css'

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
    padding: theme.spacing(2)
}))

const FaqItem = ({item, expanded, handleChange}) => {
    const {id, title, answer} = item

    const renderAccordionSummary = (title) => (
        <AccordionSummary id = {`panel1a-header-${title}`}>
            <span style = {{fontSize: "0.9rem", fontWeight: "550", letterSpacing: "0.04rem"}}>{title}</span>
        </AccordionSummary>
    )

    return (
        <div className = 'faq-item-root'>
            <Accordion expanded = {expanded === id} onChange = {handleChange(id)}>
                { renderAccordionSummary(title) }
                <AccordionDetails>
                    <Grid container spacing = {2}>
                        <div className = 'faq-item-info-container'>
                            <p>{answer}</p>
                        </div>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default FaqItem