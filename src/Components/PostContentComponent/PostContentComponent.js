import React, {useState, useEffect} from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import useMediaQuery from "@mui/material/useMediaQuery"
import DiamondIcon from "@mui/icons-material/Diamond"

import PrimaryButton from "../Button/PrimaryButton"
import SecondaryButton from "../Button/SecondaryButton"

const PostContentComponent = ({content, handleViewOnClick, handleStoreOnClick}) => {
    const matches = useMediaQuery('(max-width: 800px)')

    const [postTitle, setPostTitle ] = useState({
        prefix: "",
        suffix: ""
    })

    const verticalPadding = '20px'

    useEffect(() => {
        const index = getIndex(content.title)
        if (index !== -1) {
            splitWord(content.title, index)
        } else {
            splitWord(content.title, content.title.length)
        }
        // eslint-disable-next-line
    }, [])

    const splitWord = (sentence,startIndex) => {
        setPostTitle(() => ({
            prefix: sentence.substring(0, startIndex),
            suffix: sentence.substring(startIndex+1, sentence.length)
        }))
    }
    
    const getIndex = (text) => {
        return text.lastIndexOf(" ")
    }

    const renderHeader = () => (
        <Typography
            sx = {{
                fontFamily: 'Candara',
                fontWeight: 600,
                textTransform: "capitalize",
                fontSize: matches ? "2rem" : "4rem"
            }}
            component = "h1"
            variant = "h1"
            align = "left"
            color = "white"
            gutterBottom
        >
            {postTitle.prefix} <span style = {{color: "#31e2f2"}}>{postTitle.suffix}</span>
        </Typography>
    )

    const renderDescription = () => (
        <Typography
            variant = "body1"
            noWrap
            align = "justify"
            component = "a"
            color = "rgba(255, 255, 255, 0.7)"
            sx = {{whiteSpace: "initial",  fontFamily: 'Trebuchet MS', fontSize: matches ? '0.8rem' : '1.1rem'}}
        >
            {content.description}
        </Typography>
    )

    const renderCategory = () => (
        <Typography 
            style = {{fontFamily: 'Trebuchet MS'}} 
            variant = "subtitle1" 
            align = "left" 
            color = '#31e2f2' 
            fontSize = '17px' 
            paddingTop = {verticalPadding} 
            paragraph
        >
            {content.categoryType}
        </Typography> 
    )

    const renderPostedOn = () => (
        <Typography style = {{fontFamily: 'Trebuchet MS'}} variant = "subtitle1" align = "left" color = "#fff" fontSize = '17px' paragraph>
            Posted On : {content.postDate}
        </Typography>
    )

    const buttonFooter = () => (
        <Stack sx = {{ pt: 2, marginTop: 4, alignItems: "center" }} direction = "row" spacing = {2} justifyContent = "left">
            <DiamondIcon sx = {{ color: "#fff"}}/>
            <PrimaryButton label = "VIEW" onClick = {handleViewOnClick}/>
            <SecondaryButton label = "STORE" onClick = {handleStoreOnClick}/>
        </Stack>
    )
    
    return(
        <div>
            <Box>
                { renderHeader() }
                { renderDescription() }
                { renderCategory() }
                { renderPostedOn() }
                { buttonFooter() }
            </Box>
        </div>
    )
}

export default  PostContentComponent