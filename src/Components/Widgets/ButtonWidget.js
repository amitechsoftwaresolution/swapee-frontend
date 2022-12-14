import React from 'react'

import Button from "@mui/material/Button"

const ButtonWidget = (props) => {
    const background = props.background

    return (
        <>
            <Button
                sx = {{
                    margin: '0px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    color: 'white',
                    border: '0px',
                    textAlign: 'center',
                    background: background,
                    alignItems: "center",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    boxShadow: 'rgb(0 171 85 / 24%) 0px 8px 16px 0px',
                    transition: 'all, 1s',
                    fontSize: "0.75rem",
                    letterSpacing: "0.1rem",
                    fontWeight: "bold",
                    '&:hover': {
                        color: background, 
                        border: `1px solid ${background}`, 
                        background: 'transparent', 
                        fontWeight: "bold", 
                        transition: 'all, 1s'
                    }
                }}
                onClick = {props.onClick}
            >
                { 
                    props && props.icon && <props.icon sx = {{ 
                            fontSize:30, 
                            marginRight: '20px', 
                            marginBottom: '0px', 
                            padding: '0px'
                        }}
                    /> 
                }
                { props.name }
            </Button>
        </>
    )
}

export default ButtonWidget