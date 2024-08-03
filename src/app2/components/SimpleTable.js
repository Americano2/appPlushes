import React, {memo} from 'react'

import AspectImage from "./AspectImage"

import { TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material'

function SimpleTable({ rows, headers, imageColumns }) {

  return (
    <TableContainer>
        <Table>
            {
                headers && headers.length > 1 ?
                <TableHead>
                    <TableRow>
                        {
                            headers.map(header => (
                                <TableCell key={header} align="center">
                                    {header}
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                :
                <></>
            }
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        {Object.keys(row).map((key, index) => (
                            <TableCell key={index} align="center">
                                {
                                    imageColumns && imageColumns.includes(index) ?
                                    <AspectImage
                                        src={row[key]}
                                        width="100%"
                                        aspectRatio="1/1"
                                    />
                                    :
                                    row[key]
                                }
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default memo(SimpleTable)