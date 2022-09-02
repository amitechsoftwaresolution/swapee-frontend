import React, {useRef} from 'react'

import { IconButton } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import './Input.css'

const InputImage = ({inputOnChange}) => {
    const inputImageFile = useRef(null)

    const uploadOnClick = () => {
        inputImageFile.current.click()
    }

    return (
        <div className = 'input-image-field-root'>
            <input 
                type = "file" 
                autoComplete = "off" 
                tabIndex = "-1" 
                style = {{display: 'none'}} 
                ref = {inputImageFile}
                onChange = {inputOnChange}
            />
            <IconButton aria-label = "upload" onClick = {uploadOnClick} sx = {{color: "#fff"}}>
                <CloudUploadIcon />
            </IconButton>
            <div className = 'input-image-field-text'>
                <h5>Select image for a post</h5>
            </div>
        </div>
    )
}

export default InputImage