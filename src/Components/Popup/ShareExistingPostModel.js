import React from 'react'

import {Dialog, Slide, DialogContent, DialogTitle, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import ProductList from '../Product/ProductList'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction = "up" ref = {ref} {...props} />
})

const ShareExistingPostModel = ({
    open, 
    productData, 
    count, 
    page, 
    handleClose, 
    handlePageOnChange
}) => {

    const renderContent = () => (
        <DialogContent dividers = {true} sx = {{background: "rgba(255, 255, 255, .15)", backdropFilter: "blur(5px)"}}>
            <ProductList 
                productData = {productData}
                count = {count}
                page = {page}
                handlePageOnChange = {handlePageOnChange}
            />
        </DialogContent>
    )

    const renderTitle = () => (
        <DialogTitle sx = {{m: 0, p: 2, color: "#fff", background: "rgba(255, 255, 255, .15)", backdropFilter: "blur(5px)"}}>
            Select your post to exchange
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
            scroll = "paper"
            maxWidth = {'md'}
        >
            { renderTitle() }
            { renderContent() }
        </Dialog>
    )
}

export default ShareExistingPostModel