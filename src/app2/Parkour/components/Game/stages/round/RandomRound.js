import React, {useState, useEffect } from 'react'

import { Button, Typography } from '@mui/material'

import { AspectImage } from '../../../../../components'

import { useSelector, useDispatch } from 'react-redux'
import { setMode, setLevels } from "../../../../data/slices/roundSlice"

import { randomElement } from '../../../../../features'

import { Link } from 'react-router-dom'

function RandomRound() {
  const { modes, modeImages, levels, levelImages } = useSelector((state) => state.parkourLevelMode)
  const { allowedModes, allowedLevels } = useSelector((state) => state.parkourGame)
  const { roundMode, roundLevels } = useSelector((state) => state.parkourRound)

  const dispatch = useDispatch()

  const [imageData, setImageData] = useState({src: "", alt: "", caption: ""})

  const [modeIsNull, setModeIsNull] = useState(true)
  const [levelSign, setLevelSign] = useState("рівень")

  const selectRandomMode = () => {
    dispatch(setMode(randomElement(allowedModes)))
  }

  const selectRandomLevels = () => {
    let newLevels = []

    if(roundMode === 1) { // Чи є модом з двома рівнями
      for(let i = 0; i < 2; i++)
        newLevels[i] = randomElement(allowedLevels)
    }
    else {
      newLevels[0] = randomElement(allowedLevels)
    }

    dispatch(setLevels(newLevels))
  }

  //eslint-disable-next-line
  useEffect(() => {
    if(roundMode !== null){
      setImageData({
        src: modeImages[roundMode],
        alt: modes[roundMode],
        caption: modes[roundMode]
      })

      setModeIsNull(false)
    }
  }, [roundMode])

  //eslint-disable-next-line
  useEffect(() => {
    if(roundLevels){
      let caption = "" + levels[roundLevels[0]]

      //Check if mode two levels
      if(roundLevels.length > 1){
        caption += "-" + levels[roundLevels[1]]
        setLevelSign("рівні")
      }

      setImageData({
        src: levelImages[roundLevels[0]],
        alt: levels[roundLevels[0]],
        caption: caption
      })
    }
  }, [roundLevels])

  return (
    <>
      <Typography variant="h5">
        {
          modeIsNull ?
          "Обреріть мод"
          :
          `Оберіть ${levelSign}`
        }
      </Typography>
      <AspectImage 
        src={imageData.src}
        alt={imageData.alt}
        caption={imageData.caption}
        width="300px"
        aspectRatio="1/1"
      />
      {
        roundLevels && !modeIsNull ?
        <Button variant="outlined" component={Link} to="/parkour/game/round/main">
          До наступної стадії
        </Button>
        :  modeIsNull ?
        <Button variant='outlined' onClick={selectRandomMode}>
          Обрати випадково мод
        </Button>
        :
        <Button variant='outlined' onClick={selectRandomLevels}>
          Обрати випадково {levelSign}
        </Button>
      }
    </>
  )
}

export default RandomRound