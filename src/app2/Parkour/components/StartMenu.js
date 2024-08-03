import React from 'react'

import { Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

function StartMenu() {
  const ButtonProps = {
    component: Link,
    variant: "outlined",
    size: "large",
    sx: {
      minWidth: "300px",
      p: 2
    }
  }

  return (
    <>
      <Typography variant="h1">Паркур</Typography>
      <Stack gap={3} justifyContent="space-evenly">
        <Button
          to="game/start"
          {...ButtonProps}
          fullWidth
        >
          Нова гра
        </Button>
        <Button
          to="game/continue"
          {...ButtonProps}
          disabled={localStorage.getItem("parkour-stage") === null}
          fullWidth
        >
            Продовжити
        </Button>
        <Button
          {...ButtonProps}
          fullWidth
        >
          Історія Ігор
        </Button>
      </Stack>
      <div>
        Від Plushes
      </div>
    </>
  )
}

export default StartMenu