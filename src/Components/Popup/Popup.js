import React from 'react'

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const Popup = ({open, title, children, handleClose}) => {

    const renderActions = () => (
        <DialogActions>
            <Button onClick = {handleClose}>Disagree</Button>
            <Button onClick = {handleClose}>Agree</Button>
        </DialogActions>
    )

    const renderContent = () => (
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText>
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle>{title}</DialogTitle>
    )

    return (
        <Dialog
            open = {open}
            TransitionComponent = {Transition}
            keepMounted
            onClose = {handleClose}
            aria-describedby = "alert-dialog-slide-description"
        >
        { renderTitle() }
        { renderContent() }
        { renderActions() }
      </Dialog>
    )
}

export default Popup