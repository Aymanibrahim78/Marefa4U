
import React from 'react'
import {Box, Container,Skeleton,Stack,} from '@mui/material'

const Loading = () => {
  return (
  <Container maxWidth="lg">

<Skeleton variant="rounded" sx={{my:5}} width={320} height={35} />

    <Stack  direction={"row"} gap={2}  my={2} flexWrap={"wrap"}  sx={{justifyContent:'space-between'}} >

   
    <Box >

  
<Stack spacing={1} width={350} >
 
      <Skeleton variant="rounded" width={300} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={260} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={200}  />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={200}  />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={200}  />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={200}  />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={200}  />
    </Stack>
  </Box>



  <Box>

 

  <Skeleton  variant="text" sx={{ fontSize: '1rem', width:{xs:"300px",sm:"500px",lg:"600px"} }}   height={45} />
  <Skeleton  variant="text" sx={{ fontSize: '1rem',width:{xs:"250px",sm:"450px",lg:"500px"}   }}  height={35}  />
  <Skeleton  variant="text" sx={{ fontSize: '1rem',width:{xs:"200px",sm:"400px",lg:"450px"}   }}  height={25}  />

  </Box>


    
  </Stack>

  <Stack flexWrap={'wrap'}  gap={3} my={5} sx={{justifyContent:{xs:'center',sm:"center",lg:"space-between"} ,flexDirection:"row"}} >

  <Skeleton variant="rounded" sx={{width:{xs:"350px",sm:"500px",lg:"650px"} ,height:{xs:"300px",sm:"400px",lg:"500px"}}}   />


<Box>
<Stack spacing={1} width={350} >

      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
      <Skeleton  variant="text" sx={{ fontSize: '1rem' }} width={350}  height={50} />
    </Stack>

</Box>


  </Stack>

  </Container>
  )
}

export default Loading
