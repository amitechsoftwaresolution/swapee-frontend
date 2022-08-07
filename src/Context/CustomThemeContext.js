import {createTheme} from "@mui/material/styles"
import {ThemeProvider} from "@emotion/react"

const CustomThemeContext = ({children}) => {
    const primaryColor = '#4b4e5f'
    const secondaryColor = '#fcfcfc'
    const infoColor = '#797a78'
    const backgroundBoxColor = '#fcfcfc'
    const fontSize = 13.5
    const fontWeight = 500
    const borderRadius = 50
    const borderThickness = '1px solid '
    const buttonPrimaryColor = '#31e2f2'
    const buttonSecondaryColor = '#4b4e5f'
    const buttonTertiaryColor = '#fcfcfc'
    const buttonMargin = '5px'


    const theme = createTheme({
        palette:{
            primary:{
                main: primaryColor,
            },
            secondary:{
                main: secondaryColor
            },
            info:{
                main: infoColor
            },
            text:{
                primary: primaryColor,
                secondary: secondaryColor,
                disabled:infoColor
            },
            background: {
                paper: backgroundBoxColor,
                default: secondaryColor
            }
        },
        shape:{
           borderRadius:50
        },
        typography:{
           fontSize: fontSize,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    containedPrimary:{
                        margin:buttonMargin,
                        backgroundColor: buttonPrimaryColor,
                        fontWeight:fontWeight,
                        border: borderThickness+buttonPrimaryColor,
                        color: primaryColor,
                        borderRadius:borderRadius,
                        '&:hover': {
                            background: secondaryColor,
                            fontWeight:fontWeight,
                            color: primaryColor,
                            border: borderThickness+primaryColor
                        }
                    },
                    containedSecondary:{
                        margin:buttonMargin,
                        backgroundColor: buttonSecondaryColor,
                        color: buttonTertiaryColor,
                        borderRadius:borderRadius,
                        fontWeight:fontWeight,
                        '&:hover': {
                            background: primaryColor,
                            color: secondaryColor,
                            fontWeight:fontWeight,
                            border: borderThickness+secondaryColor
                        }
                    },
                    outlinedPrimary:{
                        margin:buttonMargin,
                        backgroundColor: secondaryColor,
                        border: borderThickness+primaryColor,
                        color: primaryColor,
                        fontWeight:fontWeight,
                        borderRadius:borderRadius,
                        '&:hover': {
                            background: primaryColor,
                            color: secondaryColor,
                            fontWeight:fontWeight,
                            border: borderThickness+secondaryColor,
                        }
                    }
                }
            }
        },
    })

    return (
        <ThemeProvider theme = {theme}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeContext