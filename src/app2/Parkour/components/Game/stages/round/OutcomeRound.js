import React, {useState } from 'react'

import { Button, Typography, Box } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

import { excludeArray, toggleValueArray } from '../../../../../features'

import { ListActionCollapse } from "../../../../../components"

import { useSelector, useDispatch } from 'react-redux'
import { setListPlaces } from '../../../../data/slices/gameSlice'
import { setRoundToNull, setDown } from '../../../../data/slices/roundSlice'

import { useNavigate } from 'react-router'

function OutcomeRound() {
  const { plushes, plushesImages } = useSelector(state => state.plushes)
  const { listPlaces, numberPlaces } = useSelector(state => state.parkourGame)
  const { toDown, currentPlace } = useSelector(state => state.parkourRound)

  const [toUp, setToUp] = useState(excludeArray(listPlaces[currentPlace], toDown))

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEndRound = () => {
    let newListPlaces = [...listPlaces]

    if(toDown && toDown.length > 0) {

      if(toUp.length > 0){
        newListPlaces[currentPlace] = toUp

        newListPlaces.push(toDown)
      } else {
        newListPlaces[currentPlace] = toDown
      }
    }

    dispatch(setRoundToNull())
    dispatch(setListPlaces(newListPlaces))

    if(newListPlaces.length >= numberPlaces)
      navigate("/parkour/game/outcome")
    else
      navigate("/parkour/game/round/random")
  }

  const transferJumper = (id) => {
    setToUp(toggleValueArray(toUp, id))

    if(toDown)
      dispatch(setDown(toggleValueArray(toDown, id)))
    else
      dispatch(setDown([id]))
  }

  const listActionCollapseProps = {
    listMain: plushes,
    listImages: plushesImages,
    action: transferJumper
  }

  return (
    <>
      <Typography variant="h5">Висновки раунду</Typography>
      <Box>
        <ListActionCollapse
          listIds={toUp}
          sign={`Пройшли ${toUp.length}/${listPlaces[currentPlace].length}`}
          actionIcon={<ArrowDownward />}
          { ...listActionCollapseProps}
        />
        <ListActionCollapse
          listIds={toDown || []}
          sign={`Впали ${toDown ? toDown.length : 0}/${listPlaces[currentPlace].length}`}
          actionIcon={<ArrowUpward />}
          { ...listActionCollapseProps}
        />
      </Box>
      <Button variant="outlined" onClick={handleEndRound}>Закінчити раунд</Button>
    </>
  )
}

export default OutcomeRound