import React from 'react'

import {Table, TableBody, TableContainer, TableHead, TableRow, IconButton, Tooltip} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'

import Status from '../Status/Status'
import Paginator from '../Pagination/Paginator'

import exchangeIcon from '../../Assets/Images/Common/exchange.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#4b4e5f",
        color: theme.palette.common.white,
        border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}))
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

const ProductList = ({productData, count, page, handlePageOnChange}) => {
    const headers = ["Title", "Created", "Price", "Status", "Action"]

    const renderStatusCell = () => (
        <StyledTableCell align = "right">
            <div>
                <Status status = "Feature" color = "#fff"/>
            </div>
            <div style = {{marginTop: "3px"}}>
                <Status status = "Urgent" color = "#fff"/>
            </div>
        </StyledTableCell>
    )

    const renderActionCell = () => (
        <StyledTableCell align = "right">
            <Tooltip title = "Exchange">
                <IconButton>
                    <img src = {exchangeIcon} style = {{width: "20px"}} alt = "exchange-icon"/>
                </IconButton>
            </Tooltip>
        </StyledTableCell>
    )

    const renderTableBody = () => (
        <TableBody>
            { productData && productData.map((data, idx) => {
                const {title, price, date} = data
                return (
                    <StyledTableRow key = {idx}>
                        <StyledTableCell component = "th" scope = "row">{title}</StyledTableCell>
                        <StyledTableCell align ="right">{title}</StyledTableCell>
                        <StyledTableCell align = "right">{date}</StyledTableCell>
                        <StyledTableCell align = "right">{price}</StyledTableCell>
                        { renderStatusCell() }
                        { renderActionCell() }
                    </StyledTableRow>
                )
            }) }
        </TableBody>
    )

    const renderTableHead = () => (
        <TableHead>
            <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                { headers.map((item, idx) => {
                    return <StyledTableCell align = "right" key = {idx}>{item}</StyledTableCell>
                }) }
            </TableRow>
        </TableHead>
    )

    return (
        <TableContainer>
            <Table aria-label = "customized table">
                { renderTableHead() }
                { renderTableBody() }
            </Table>
            <div style = {{marginTop: "10px", marginBottom: "10px"}}>
                <Paginator count = {count} page = {page} onChange = {handlePageOnChange}/>
            </div>
        </TableContainer>
    )
}

export default ProductList