import React from 'react'

import {Box, Dialog, Slide, DialogContent, DialogActions, DialogContentText, DialogTitle, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const ShareDecisionModel = ({open, handleClose, handleYesOnClick, handleNoOnClick}) => {
    
    const renderActions = () => (
        <DialogActions sx = {{mb: "10px", mr: "10px"}}>
            <SecondaryButton label = "No" onClick = {handleNoOnClick} />
            <PrimaryButton label = "Yes" onClick = {handleYesOnClick} />
        </DialogActions>
    )

    const renderContent = () => (
        <DialogContent>
            <DialogContentText id = "alert-dialog-slide-description" sx = {{color: "#fff"}}>
                Share already created post ?
            </DialogContentText>
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle sx = {{ m: 0, p: 2 }}>
            <IconButton aria-label = "close" onClick = {handleClose}
                sx = {{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
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
        >
            <Box sx = {{background: "#4b4e5f"}} p = "10px">
                { renderTitle() }   
                { renderContent() }
                { renderActions() }
            </Box>
        </Dialog>
    )
}

export default ShareDecisionModel