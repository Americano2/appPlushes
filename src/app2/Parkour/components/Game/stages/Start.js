import React, {useEffect} from 'react'

import { Button } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'
import { setAllFromList } from "../../../data/slices/gameSlice"

import { setRoundToNull } from '../../../data/slices/roundSlice'

import { useNavigate } from 'react-router-dom'
import { getIndexes } from '../../../../features'

function Start() {
  const { plushes } = useSelector((state) => state.plushes)
  const { levels, modes } = useSelector((state) => state.parkourLevelMode)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setAllFromList({
      stage: 0,
      numberPlaces: plushes.length,
      listPlaces: [getIndexes(plushes)],
      allowedLevels: getIndexes(levels),
      allowedModes: getIndexes(modes)
    }))

    dispatch(setRoundToNull())

    navigate("/parkour/game/round/random", true)
  }, [])

  return (
    <></>
  )
}

export default Start