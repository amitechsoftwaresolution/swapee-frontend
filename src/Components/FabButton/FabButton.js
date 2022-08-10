import React, {useState, useEffect} from "react"

import IconButton from '@mui/material/IconButton'
import Zoom from '@mui/material/Zoom'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import { useTheme } from '@mui/material/styles'

import './FabButton.css'

const FabButton = () => {
    const theme = useTheme()

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    let style = ["fab-button"]

    if (showButton) {
        style.push('fab-button_visible')
    }

    return (
        <Zoom
            in = {showButton}
            timeout = {transitionDuration}
            style = {{
                    transitionDelay: `${showButton ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
        >
            <div className = {style.join(" ")}>
                <IconButton aria-label = "up" onClick = {goToTop}>
                    <KeyboardArrowUp sx = {{color: "#31e2f2", stroke: '#31e2f2', strokeWidth: 2}}/>
                </IconButton>
            </div>
        </Zoom>
    )
}

export default FabButton