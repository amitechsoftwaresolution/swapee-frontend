import React from 'react'

import Button from "@mui/material/Button"

const SignInButtonWidget = (props) => {
    const background = props.background

    return (
        <>
            <Button
                sx = {{
                    margin: '0px',
                    width: '100%',
                    height: '50px',
                    borderRadius: '4px',
                    color: 'white',
                    border: '0px transparent',
                    textAlign: 'center',
                    background: background
                }}
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

export default SignInButtonWidget