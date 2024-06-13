'use client'
import { Box, useTheme } from '@mui/material'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../../_Context/ThemeContext';

const DarkModeToogle = () => {
  const { toggleDarkMode } = useThemeContext();
  const theme =useTheme()
  return (
    <Box>
      {
        theme.palette.mode=="dark"? ( <DarkModeIcon onClick={toggleDarkMode} sx={{color:"#2CAAC1" ,fontSize:"35px",cursor:"pointer"}}/>):(<LightModeIcon onClick={toggleDarkMode} sx={{color:"#2CAAC1" ,fontSize:"35px",cursor:"pointer"}} />)
      }

     
      

    </Box>
  )
}

export default DarkModeToogle
