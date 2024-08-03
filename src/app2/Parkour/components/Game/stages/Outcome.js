import React, {useState, useEffect} from 'react'

import { TableVirtualized } from '../../../../components'

import { Typography, Box, Button } from '@mui/material'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Outcome() {
  const { plushes, plushesImages } = useSelector(state => state.plushes)
  const { listPlaces } = useSelector(state => state.parkourGame)

  const [rows, setRows] = useState(
    listPlaces.map((place, index) => {
      return {
        place: <Typography variant="h5">{index + 1}</Typography>,
        participantImage: plushesImages[place[0]],
        participant: plushes[place[0]].name
      }
    })
  )

  const columns = [
    {
      width: 100,
      label: "Місце",
    },
    {
      width: 200,
      label: "Учасник",
      colspan: 2
    },
  ]

  return (
    <>
      <Typography variant="h5">Список місць</Typography>
      <Box
        minHeight="300px"
        width="300px"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column"
        }}
      >
        <TableVirtualized
          columns={columns}
          rows={rows}
          columnsImages={[1]}
          dataAlignment={{
            0: "center"
          }}
        />
      </Box>
      <Button component={Link} to="/parkour">Повернутися до головного меню</Button>
    </>
  )
}

export default Outcome