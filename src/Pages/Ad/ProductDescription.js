import React, {useState} from "react"

import {Grid, Divider} from "@mui/material"
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import { styled } from "@mui/material/styles"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"

import './Ad.css'

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
    padding: theme.spacing(2)
}))

const ProductDescription = () => {
    const [expanded, setExpanded] = useState('Specification')

    const specifications = [
        {type: "Type", value: "Hooded Neck, Paint Clothes"},
        {type: "Sleeve", value: "Full"},
        {type: "Fabric", value: "Silk"},
        {type: "Style", value: "CV-TS9865"},
        {type: "Reversible", value: "no"},
        {type: "Type", value: "Hooded Neck, Paint Clothes"},
        {type: "Sleeve", value: "Full"},
    ]

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }

    const renderSpecificationInfo = (type, value) => (
        <div className = "product-detail-specification-info">
            <p>{type}</p>
            <span>{value}</span>
        </div>
    )

    const renderAccordionSummary = (title) => (
        <AccordionSummary expandIcon = {<ExpandMoreIcon/>} id = {`panel1a-header-${title}`}>
            <span style = {{fontSize: "0.9rem", fontWeight: "550", letterSpacing: "0.04rem"}}>{title}</span>
        </AccordionSummary>
    )

    const renderOtherInfo = (title) => (
        <Accordion expanded = {expanded === title} onChange = {handleChange(title)}>
            { renderAccordionSummary(title) }
            <AccordionDetails>
                <span className = "product-detail-other-info">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                    a large language ocean. A small river named Duden flows by their place and supplies it with the necessary
                </span>
            </AccordionDetails>
        </Accordion>
    )

    const renderSpecification = (title) => (
        <Accordion expanded = {expanded === title} onChange = {handleChange(title)}>
            { renderAccordionSummary(title) }
            <AccordionDetails>
                <Grid container spacing = {2}>
                    { specifications.map((i, idx) => {
                        return (
                            <Grid item xs = {12} sm = {6} md = {6} key = {idx}>
                                { renderSpecificationInfo(i.type, i.value) }
                            </Grid>
                        )
                    })}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )

    const renderDescription = () => (
        <div className = "product-detail-description-con">
            <h3>Description</h3>
            <Divider sx = {{backgroundColor: "rgba(255, 255, 255, 0.4)", marginTop: "5px", marginBottom: "20px", ml: "-3px"}}/>
            { renderSpecification("Specification") }
            { renderOtherInfo("Other Informations") }
        </div>
    )

    return (
        <div className = "product-detail-block">
            <Grid container spacing = {3}>
                <Grid item xs = {12} sm = {12} md = {12}>
                    { renderDescription() }
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDescription