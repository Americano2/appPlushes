import React, { useEffect, useState } from 'react'

import { Outlet, useLocation } from 'react-router'

import { saveToStorage, getItems } from '../../../features'

import { useSelector, useDispatch } from 'react-redux'
import { setAllFromList, setStage } from '../../data/slices/gameSlice'

import { setCurrentPlace, setRoundFromList } from '../../data/slices/roundSlice'

function Game() {
  const { listPlaces, allowedLevels, allowedModes, stage, numberPlaces } = useSelector((state) => state.parkourGame)
  const { roundMode, roundLevels, toDown, currentPlace, currentJumper} = useSelector((state) => state.parkourRound)

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const location = useLocation()

  const save = (value, key) => {
    if (!isLoading)
      saveToStorage(value, key)
  }

  useEffect(() => {
    let newStage = stage

    switch(location.pathname) {
      case "/parkour/game/start":
        newStage = 0
        break
      case "/parkour/game/round/random":
        newStage = 1
        break
      case "/parkour/game/round/main":
        newStage = 2
        break
      case "/parkour/game/round/outcome":
        newStage = 3
        break
      case "/parkour/game/outcome":
        newStage = 4
        break
      default:
        newStage = stage
        break
    }

    dispatch(setStage(newStage))
  }, [location])

  useEffect(() => {
    dispatch(
      setAllFromList(
        getItems([
          "stage",
          "listPlaces",
          "allowedLevels",
          "allowedModes",
          "numberPlaces"
        ], "parkour")
      )
    )

    dispatch(
      setRoundFromList(
        getItems([
          "roundMode",
          "roundLevels",
          "toDown",
          "currentPlace",
          "currentJumper"
        ], "parkour")
      )
    )

    setIsLoading(false)
  }, [])

  useEffect(() => {
    if(listPlaces){
      save(listPlaces, "parkour-listPlaces")
      dispatch(setCurrentPlace(listPlaces.findLastIndex(place => place.length > 1)))
    }
  }, [listPlaces])

  useEffect(() => {
      save(allowedLevels, "parkour-allowedLevels")
  }, [allowedLevels])

  useEffect(() => {
    save(allowedModes, "parkour-allowedModes")
  }, [allowedModes])

  useEffect(() => {
    save(stage, "parkour-stage")
  }, [stage])

  useEffect(() => {
    save(numberPlaces, "parkour-numberPlaces")
  }, [numberPlaces])

  useEffect(() => {
    save(roundMode, "parkour-roundMode")
  }, [roundMode])

  useEffect(() => {
    save(roundLevels, "parkour-roundLevels")
  }, [roundLevels])

  useEffect(() => {
    save(toDown, "parkour-toDown")
  }, [toDown])

  useEffect(() => {
    save(currentPlace, "parkour-currentPlace")
  }, [currentPlace])

  useEffect(() => {
    save(currentJumper, "parkour-currentJumper")
  }, [])

  if(isLoading) {
    return (
      <div>...isLoading</div>
    )
  }

  return (
    <Outlet />
  )
}

export default Game