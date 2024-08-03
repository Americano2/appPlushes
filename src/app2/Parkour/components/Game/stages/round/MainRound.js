import React, {useState, useEffect} from 'react'

import { Button, ButtonGroup, Typography } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

import { AspectImage, ListImagesTooltip } from '../../../../../components'

import { useSelector, useDispatch } from 'react-redux'
import { setDown, setCurrentJumper } from "../../../../data/slices/roundSlice"

import { Link } from 'react-router-dom'

function MainRound() {
  const { plushes, plushesImages } = useSelector(state => state.plushes)
  const { levels, levelImages, modes, modeImages } = useSelector(state => state.parkourLevelMode)
  const { listPlaces } = useSelector(state => state.parkourGame)
  const { roundMode, roundLevels, toDown, currentPlace, currentJumper } = useSelector(state => state.parkourRound)

  const [jumpers, setJumpers] = useState(listPlaces[currentPlace])

  const [jumper, setJumper] = useState(currentJumper || 0)

  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [imagesTooltipData, setImagesTooltipData] = useState(
    [roundMode, ...roundLevels].map((el, index) => index === 0 ?
      {tooltip: modes[el], image: modeImages[el] }
      :
      {tooltip: levels[el], image: levelImages[el]})
  )

  const dispatch = useDispatch()

  const nextJumper = () => {
    let newJumper = jumper + 1

    if(jumpers.length > newJumper)
      setJumper(newJumper)
    else
      setButtonDisabled(false)
  }

  const handleToFall = () => {
    dispatch(setDown([...toDown || [], jumpers[jumper]]))
    nextJumper()
  }

  useEffect(() => {
    dispatch(setCurrentJumper(jumper))
  }, [jumper])

  return (
    <>
      <ListImagesTooltip
        arrayData={imagesTooltipData}
        cols={imagesTooltipData.length}
        width={imagesTooltipData.length >= 3 ? 200 : 130}
        gap={10}
      />
      <AspectImage
        src={plushesImages[jumpers[jumper]]}
        width="300px"
        aspectRatio="1/1"
        caption={plushes[jumpers[jumper]].name}
      />
      <ButtonGroup variant="outlined" size="large" sx={{maxWidth: "300px"}} fullWidth>
        {
          !buttonDisabled ?
          <Button component={Link} to="/parkour/game/round/outcome" fullWidth>До наступної стадії</Button>
          :
          <>
            <Button onClick={handleToFall} startIcon={<ArrowDownward />} disabled={!buttonDisabled}>Впав</Button>
            <Button onClick={nextJumper} endIcon={<ArrowUpward />} disabled={!buttonDisabled}>Пройшов</Button>
          </>
        }
      </ButtonGroup>
    </>
  )
}

export default MainRound