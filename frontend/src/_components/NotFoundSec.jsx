import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFoundSec = ({title}) => {
  return (
    <Box>
        <Typography variant="body1" sx={{textAlign:"center",fontSize:'25px',fontWeight:"700" ,my:5}} >Not Found <span style={{color:'#2caac1'}} >{title}</span> </Typography>
      
    </Box>
  )
}

export default NotFoundSec
