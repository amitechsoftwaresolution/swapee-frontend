import React from 'react'

import {Box, Dialog, Slide, DialogContent, DialogTitle, DialogActions, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import InputField from '../../Components/Input/InputField'
import MultilineInput from '../Input/MultilineInput'
import SelectField from '../Input/SelectField'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const ReportAdModel = ({
    open, 
    values, 
    handleClose, 
    handleCancelOnClick, 
    handleSubmitOnClick,
    handleInputOnChange
}) => {

    const reasons = ["Reason 1", "Reason 2"]

    const renderSelectField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <SelectField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {values[name]}
                    items = {reasons}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderMultilineInputField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <MultilineInput 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {values[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderInputField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <InputField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {values[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderActions = () => (
        <DialogActions sx = {{mb: "10px", mr: "10px"}}>
            <SecondaryButton label = "Cancel" onClick = {handleCancelOnClick} />
            <PrimaryButton label = "Submit" onClick = {handleSubmitOnClick} />
        </DialogActions>
    )

    const renderForm = () => (
        <Box sx = {{my: 2, display: 'flex', flexDirection: 'column'}}>
            { renderInputField("email", "Email", "Email") }
            { renderSelectField("reason", "Reason", "Reason") }
            { renderMultilineInputField("message", "Message", "Message") }
        </Box>
    )

    const renderContent = () => (
        <DialogContent>
            { renderForm() }
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle sx = {{ m: 0, p: 2, color: "#fff" }}>
            What's wrong with this ad ?
            <IconButton aria-label = "close" onClick = {handleClose}
                sx = {{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: "#fff",
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
            PaperProps = {{
                style: {
                    backgroundColor: 'transparent',
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

export default ReportAdModel