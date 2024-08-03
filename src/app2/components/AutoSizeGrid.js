import React, {memo} from 'react'

import { FixedSizeGrid } from 'react-window'

import AutoSizer from 'react-virtualized-auto-sizer'

import AspectImage from "./AspectImage"

import { Box } from '@mui/material'

function AutoSizeGrid({gridData, columnForImages, widthImage, gap}) {

  const Cell = ({columnIndex, rowIndex, style, data}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
                ...style,
                left: style.left + gap,
                top: style.top + gap,
                width: style.width - gap,
                height: style.height - gap
            }}
        >
            {
                columnForImages && columnForImages.includes(columnIndex) ?
                <AspectImage
                    src={data[rowIndex][columnIndex]}
                    alt={`${rowIndex} ${columnIndex}`}
                    width={widthImage + "px"}
                    aspectRatio="1/1"
                />
                :
                data[rowIndex][columnIndex]
            }
        </Box>
    )
  }

  return (
    <AutoSizer>
        {({height, width}) => (
            <FixedSizeGrid
                height={height}
                width={width}
                rowCount={gridData.length}
                columnCount={gridData[0].length}
                itemData={gridData}
                columnWidth={width / gridData[0].length}
                rowHeight={widthImage + gap}
            >
                {Cell}
            </FixedSizeGrid>
        )}
    </AutoSizer>
  )
}

export default memo(AutoSizeGrid)