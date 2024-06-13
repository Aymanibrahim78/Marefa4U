import { Skeleton, Stack, Container, Box } from "@mui/material"

const Loading = () => {
  return (
    <Container maxWidth="lg" my={5} >
      <Stack direction={"row" } justifyContent={"space-between"} flexWrap={"wrap"} >

     
      <Box>

    <Skeleton variant="rounded" sx={{ fontSize: '1rem', width:{xs:"300px",sm:"350px",lg:"400px"} }} height={200} />
    <Skeleton variant="text" width={300} height={35} sx={{ fontSize: '1rem' ,my:2}} />
    <Skeleton variant="text" width={150} height={30} sx={{ fontSize: '1rem' ,mb:2}} />
    <Stack direction={"row"} gap={2} >
    <Skeleton variant="circular" width={30} height={30} sx={{ fontSize: '1rem' ,}} />
    <Skeleton variant="circular" width={30} height={30} sx={{ fontSize: '1rem' ,}} />

    </Stack>


      </Box>

      <Box>
      <Skeleton  variant="text" sx={{ fontSize: '1rem', width:{xs:"300px",sm:"500px",lg:"600px"} }}   height={45} />
  <Skeleton  variant="text" sx={{ fontSize: '1rem',width:{xs:"250px",sm:"450px",lg:"500px"}   }}  height={35}  />
  <Skeleton  variant="text" sx={{ fontSize: '1rem',width:{xs:"200px",sm:"400px",lg:"450px"}   }}  height={25}  />

      </Box>

 </Stack>
      
  
<Skeleton variant="text" width={300} height={50} sx={{ fontSize: '1rem' ,my:2}} />

    <Stack direction={"row"} gap={2} mb={5} flexWrap={"wrap"}  sx={{justifyContent:{xs:"center",sm:"center",lg:"space-between"}}} >

<Stack sx={{ width: "350px",height: "350px",textAlign:"center",border: "solid 1px var(--borederCard)",padding:1,borderRadius:"10px"}} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1}>
    <Skeleton variant="rounded" width={300} height={150} />
   
    <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
  </Stack>

  <Stack sx={{ width: "350px",height: "350px",textAlign:"center",border: "solid 1px var(--borederCard)",padding:1,borderRadius:"10px"}} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1}>
    <Skeleton variant="rounded" width={300} height={150} />
   
    <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
  </Stack>

  <Stack sx={{ width: "350px",height: "350px",textAlign:"center",border: "solid 1px var(--borederCard)",padding:1,borderRadius:"10px"}} direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1}>
    <Skeleton variant="rounded" width={300} height={150} />
   
    <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" width={300} sx={{ fontSize: '1rem' }} />
  </Stack>

    </Stack>

  </Container>
  )
}

export default Loading
