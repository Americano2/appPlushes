import React, {useEffect} from 'react'

import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

function Continue() {
  const { stage } = useSelector(state => state.parkourGame)

  const navigate = useNavigate()

  useEffect(() => {
    let path

    switch(stage) {
      case 0:
        path = "/parkour/game/start"
        break
      case 1:
        path = "/parkour/game/round/random"
        break
      case 2:
        path = "/parkour/game/round/main"
        break
      case 3:
        path = "/parkour/game/round/outcome"
        break
      case 4:
        path = "/parkour/game/outcome"
        break
      default:
        path = "/parkour"
        break
    }

    navigate(path, true)
  }, [])

  return (
    <>...Loading</>
  )
}

export default Continue