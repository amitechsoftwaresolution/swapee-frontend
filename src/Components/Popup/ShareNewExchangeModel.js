import React from 'react'

import {Box, Dialog, Slide, DialogContent, DialogActions, DialogContentText, DialogTitle, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"
import InputField from '../../Components/Input/InputField'
import MultilineInput from '../Input/MultilineInput'
import SelectField from '../Input/SelectField'
import InputImage from '../Input/InputImage'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const ShareNewExchangeModel = ({
    open, 
    state, 
    handleClose, 
    handleCancelOnClick, 
    handleExchangeOnClick,
    handleInputOnChange,
    inputImageOnChange
}) => {

    const categories = ["Fashion", "Electronics"]

    const renderSelectField = (name, label, placeholder) => {
        return (
            <div className = "signin_form-input_wrapper">
                <SelectField 
                    name = {name}
                    label = {label}
                    placeholder = {placeholder}
                    value = {state[name]}
                    items = {categories}
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
                    value = {state[name]}
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
                    value = {state[name]}
                    handleOnChange = {handleInputOnChange}
                />
            </div>
        )
    }

    const renderImageInputBlock = () => (
        <div className = 'signin_form-input_wrapper'>
            <InputImage inputOnChange = {inputImageOnChange}/>
        </div>
    )

    const renderActions = () => (
        <DialogActions sx = {{mb: "10px", mr: "10px"}}>
            <SecondaryButton label = "Cancel" onClick = {handleCancelOnClick} />
            <PrimaryButton label = "Exchange" onClick = {handleExchangeOnClick} />
        </DialogActions>
    )

    const renderForm = () => (
        <Box sx = {{my: 2, display: 'flex', flexDirection: 'column'}}>
            { renderImageInputBlock() }
            { renderInputField("title", "Title", "Title") }
            { renderSelectField("category", "Category", "Category") }
            { renderMultilineInputField("description", "Description", "Description") }
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

export default ShareNewExchangeModel