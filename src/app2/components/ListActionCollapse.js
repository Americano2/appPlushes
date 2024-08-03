//Created For Plushes

import React, { useState, useMemo } from 'react';

import { IconButton, Typography, Collapse, Box, Grid } from '@mui/material';
import { ArrowDropDown, ArrowLeft } from '@mui/icons-material';

import ListWithAction from './ListWithAction';


function ListActionCollapse({listIds, listMain, listImages, actionIcon, action, sign, maxHeight }) {
  const [collapse, setCollapse] = useState(false)

  const calculateListHeight = (list, maxHeight) => {
    let maxItemsDisplayed = Math.floor(maxHeight / 67)

    if(list.length > maxItemsDisplayed)
      return maxHeight
    else
      return 67 * list.length
  }

  const handleCollapse = () => {
    setCollapse(prev => !prev)
  }

  const heightOfList = useMemo(() => calculateListHeight(listIds, maxHeight || 400), [listIds])

  return (
    <Grid width="300px" container>
      <Grid item xs={11}>
        <Typography height="100%" alignContent="center">
          {sign}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleCollapse} size="large">
          {collapse ? <ArrowDropDown /> : <ArrowLeft />}
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Collapse in={collapse}>
          <Box width="300px" height={heightOfList}>
            <ListWithAction
              arrayData={listMain}
              arrayImages={listImages}
              arrayIds={listIds}
              actionIcon={actionIcon}
              actionFunc={action}
            />
          </Box>
        </Collapse>
      </Grid>
    </Grid>
  )
}

export default ListActionCollapse