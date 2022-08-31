import React from 'react'

import {Box, Dialog, Slide, DialogContent, DialogActions, DialogContentText, DialogTitle, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import InputField from '../../Components/Input/InputField'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const ShareNewExchangeModel = ({
    open, 
    state, 
    handleClose, 
    handleCancelOnClick, 
    handleExchangeOnClick,
    handleInputOnChange
}) => {

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {state[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderActions = () => (
        <DialogActions sx = {{mb: "10px", mr: "10px"}}>
            <SecondaryButton label = "Cancel" onClick = {handleCancelOnClick} />
            <PrimaryButton label = "Exchange" onClick = {handleExchangeOnClick} />
        </DialogActions>
    )

    const renderForm = () => (
        <Box sx = {{my: 2, display: 'flex', flexDirection: 'column'}}>
            { renderInputField("title", "Title", "Title") }
        </Box>
    )

    const renderContent = () => (
        <DialogContent>
            <DialogContentText id = "alert-dialog-slide-description" sx = {{color: "#fff"}}>
                { renderForm() }
            </DialogContentText>
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle sx = {{ m: 0, p: 2, color: "#fff" }}>
            Exchange new post
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

export default ShareNewExchangeModel