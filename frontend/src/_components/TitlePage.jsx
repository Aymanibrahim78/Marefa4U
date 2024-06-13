'use client'
import {Box, Container, Typography,useTheme} from '@mui/material'


const TitlePage = ({title}) => {
    const theme =useTheme();
  return (
    <Box className='sec-title-page'>
    <Container maxWidth="lg">
      <Typography color={theme.palette.text.primary} variant="h1" className='title-page'  >{title}</Typography>
    </Container>
    </Box>
  )
}

export default TitlePage
