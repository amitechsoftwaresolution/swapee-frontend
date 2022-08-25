import React from 'react'

import { List, Checkbox, Divider } from '@mui/material'

import './Filter.css'

const Filter = ({label, list, checked, handleToggle}) => {

    const renderListItem = (name, idx) => {
        const labelId = `checkbox-list-label-${idx}`
        return (
            <div key = {idx} onClick = {() => handleToggle(label, idx)} className = 'listitem'>
                <Checkbox
                    edge = "start"
                    checked = {checked.indexOf(idx) !== -1}
                    tabIndex = {-1}
                    disableRipple
                    inputProps = {{ 'aria-labelledby': labelId }}
                    style = {{ color: "#31e2f2" }}
                />
                <span className = 'list_item_name'>{name}</span>
            </div>
        )
    }

    return (
        <div>
            <span className = 'header_label'>{label}</span>
            <List>
                { list.map((item, idx) => renderListItem(item, idx)) }
            </List>
        </div>
    )
}

export default Filter