import React from 'react'
import { CircularProgress, Box } from '@material-ui/core'

function FullScreenProgress() {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default FullScreenProgress
