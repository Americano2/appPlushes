//Virtualized Table with virtuoso
/* Input Data:
    rows: [
        {
            id: 123,
            name: 123
        }
    ],
    columns: [
        {
            width: 100
            label: 100
            colspan: 1
        }
    ],
    columnImages: [
        1
    ]
    dataAlignment: {
        0: "center",
        1: "left",
        2: "right"
    }
*/

import React, {forwardRef, memo} from 'react'

import {
    TableContainer,
    Table,
    TableHead,
    TableCell,
    Paper,
    TableRow,
    TableBody
} from '@mui/material'

import AutoSizer from 'react-virtualized-auto-sizer'

import { TableVirtuoso } from 'react-virtuoso'

import AspectImage from './AspectImage'

const TableComponents = {
    Scrolled: forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow: forwardRef((props, ref) => <TableRow {...props} ref={ref} />),
    TableBody: forwardRef((props, ref) => <TableBody {...props} ref={ref} />)
}

function TableVirtualized({rows, columns, columnsImages, dataAlignment}) {

  const fixedHeader = () => (
    <TableRow>
        {
            columns.map((column, index) => (
                <TableCell
                    key={index}
                    variant="head"
                    align="center"
                    style={{width: column.width - 32}}
                    sx={{
                        backgroundColor: "background.paper"
                    }}
                    colSpan={column.colspan || 1}
                >
                    {column.label}
                </TableCell>
            ))
        }
    </TableRow>
  )

  const renderRows = (_, row) => (
    <>
        {
            Object.keys(row).map((key, index) => (
                <TableCell
                    key={key}
                    align={dataAlignment[index] || "left"}
                >
                    {
                        columnsImages && columnsImages.includes(index) ?
                        <AspectImage
                            src={row[key]}
                            alt={index}
                            width="100%"
                            aspectRatio="1/1"
                        />
                        :
                        row[key]
                    }
                </TableCell>
            ))
        }
    </>
  )

  return (
    <AutoSizer>
        {(({height, width}) => (
            <TableVirtuoso
                style={{height: height, width: width}}
                data={rows}
                components={TableComponents}
                fixedHeaderContent={fixedHeader}
                itemContent={renderRows}
            />
        ))}
    </AutoSizer>
  )
}

export default memo(TableVirtualized)