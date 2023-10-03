import React from 'react'

import Button from "@mui/material/Button"

const SocialButton = (props) => {
    return (
        <>
            <Button
                sx = {{
                    margin: '0px',
                    width: '100%',
                    height: '42px',
                    borderRadius: '5px',
                    color: 'rgb(86, 101, 115)',
                    border: '1px solid rgb(86, 101, 115)',
                    textAlign: 'center',
                    background: 'transparent',
                    alignItems: "center",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1rem"
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
                {props.label}
            </Button>
        </>
    )
}

export default SocialButton