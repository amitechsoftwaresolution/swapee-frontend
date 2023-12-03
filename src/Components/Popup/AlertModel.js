import React from 'react'

import {Box, Dialog, Slide, DialogContent, DialogTitle, DialogActions, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import { primaryColor } from '../../Data/Values/Values'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const AlertModel = ({
    cancelLabel = "No",
    proceedLabel = "yes",
    open, 
    handleClose, 
    handleCancelOnClick, 
    handleSubmitOnClick,
    title,
    content
}) => {

    const renderActions = () => (
        <DialogActions sx = {{mb: "10px", mr: "10px"}}>
            <SecondaryButton label = {cancelLabel} onClick = {handleCancelOnClick} />
            <PrimaryButton label = {proceedLabel} onClick = {handleSubmitOnClick} />
        </DialogActions>
    )

    const renderContent = () => (
        <DialogContent sx = {{paddingLeft: "16px"}}>
            <p
                style={{
                    fontFamily: "Public Sans,sans-serif",
                    fontSize: "1rem",
                }}
            >
                {content}
            </p>
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle sx = {{ m: 0, p: 2, color: primaryColor, fontSize: "1.25rem" }}>
            {title}
            <IconButton aria-label = "close" onClick = {handleClose}
                sx = {{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: "rgba(86, 101, 115, 0.7)",
                }}
                >
                <CloseIcon sx = {{ fontSize: "1.25rem"}}/>
            </IconButton>
        </DialogTitle>
    )

    return (
        <Dialog
            open = {open}
            TransitionComponent = {Transition}
            keepMounted
            onClose = {handleClose}
            aria-describedby = "alert-dialog-slide-description"
            fullWidth
            PaperProps = {{
                style: {
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                }
            }}
        >
            <Box sx = {{background: "rgba(255, 255, 255, .15)", backdropFilter: "blur(5px)"}} p = "10px">
                { renderTitle() }
                { renderContent() }
                { renderActions() }
            </Box>
        </Dialog>
    )
}

export default AlertModel