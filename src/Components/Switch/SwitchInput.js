import React from 'react'

import {FormGroup, FormControlLabel, Switch} from '@mui/material'

const SwitchInput = ({label, checked, handleChange}) => {

    const renderSwitch = () => (
        <Switch
            checked = {checked}
            onChange = {handleChange}
            inputProps = {{ 'aria-label': 'controlled' }}
        />
    )

    return (
        <FormGroup sx = {{fontSize: "0.8rem"}}>
            <FormControlLabel control = {renderSwitch()} label = {label} />
        </FormGroup>
    )
}

export default SwitchInput