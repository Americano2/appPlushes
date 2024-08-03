//Component form list by array of arrayId ids

//Created For Display Plushes

//Display object with property name

import React, {memo} from 'react'

import { Virtuoso } from 'react-virtuoso'

import { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton} from '@mui/material'

function ListWithAction({ arrayData, arrayImages, arrayIds, actionIcon, actionFunc}) {
  function renderRow (index, arrayId) {
    console.log(arrayId[index])
    return (
        <ListItem
            key={index}
            secondaryAction={
                <IconButton aria-label={arrayId} onClick={() => actionFunc(arrayId)}>
                    {actionIcon}
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Avatar
                    alt={`Avatar ${arrayId}`}
                    src={arrayImages[arrayId]}
                />
            </ListItemAvatar>
            <ListItemText>
                {arrayData[arrayId].name}
            </ListItemText>
        </ListItem>
    )
  }

  return (
    <Virtuoso
        style={{height: "100%"}}
        data={arrayIds}
        itemContent={renderRow}
    />
  )
}

export default memo(ListWithAction)