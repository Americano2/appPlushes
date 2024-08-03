import React, {useState} from 'react'

import { ImageList, ImageListItem, Tooltip, ClickAwayListener } from '@mui/material'

function ListImagesTooltip({arrayData, cols, width, gap}) {
  const [open, setOpen] = useState(new Array(arrayData.length).fill(false))

  const handleTooltip = (index, valueSet) => {
    setOpen(prev => {
      const newArray = [...prev]
      newArray[index] = valueSet
      return newArray
    })
  }

  return (
    <ImageList cols={cols} gap={gap} sx={{width: width + "px", overflow: "hidden"}}>
      {
        arrayData.map((data, index) => (
          <ClickAwayListener key={index} onClickAway={() => handleTooltip(index, false)}>
            <ImageListItem onClick={() => handleTooltip(index, true)}>
              <Tooltip
                PopperProps={{
                  disablePortal: false,
                }}
                onClose={() => handleTooltip(index, false)}
                open={open[index]}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={[data.tooltip]}
              >
                <img width={(width - gap*(cols - 1))/cols} src={data.image} alt={data.tooltip} style={{aspectRatio: "1/1"}}/>
              </Tooltip>
            </ImageListItem>
          </ClickAwayListener>
        ))
      }
    </ImageList>
  )
}

export default ListImagesTooltip