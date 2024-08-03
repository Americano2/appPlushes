import React from 'react'

import { Stack, styled } from '@mui/material'

import { Outlet } from 'react-router'

function Parkour() {

  const StackWithSpaceFirstAndLastElement = styled(Stack)({
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: "100vh",
    gap: 3,
    '& > :first-of-type': {
      margin: 16
    },
    '& > :last-child': {
      margin: 16
    }
  })
  return (
    <StackWithSpaceFirstAndLastElement>
      <Outlet />
    </StackWithSpaceFirstAndLastElement>
  )
}

export default Parkour