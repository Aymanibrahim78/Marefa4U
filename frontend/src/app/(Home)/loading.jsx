import {Container,Skeleton, Stack} from '@mui/material'

const Loading = () => {
  return (

    <Container maxWidth="lg">
        <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} sx={{minHeight: '35vh',my:8}} >


<Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" sx={{width:{xs:"250px",sm:"350px",lg:"450px"}}} height={20} />
      <Skeleton variant="rounded" sx={{width:{xs:"150px",sm:"250px",lg:"200px"}}} height={35} />
    </Stack>

<Skeleton animation="wave" variant="rectangular" width={350} height={150} />
      
        </Stack>

        <Stack direction={"row"} gap={2} justifyContent={"space-between"} flexWrap={"wrap"}  >

        <Stack spacing={1} className='box-about-us-in-features' >
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" width={250} height={20} />
      <Skeleton variant="rectangular" width={200} height={18} />
    </Stack>

    <Stack className="box-border-skeleton" spacing={1}>
    <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" sx={{width:"10%%"}} />
      <Skeleton variant="rounded" sx={{width:"80%"}} />
    </Stack>

    <Stack className="box-border-skeleton" spacing={1}>
    <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" sx={{width:"10%%"}} />
      <Skeleton variant="rounded" sx={{width:"80%"}} />
    </Stack>

    <Stack className="box-border-skeleton" spacing={1}>
    <Skeleton variant="circular" width={20} height={20} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" sx={{width:"10%%"}} />
      <Skeleton variant="rounded" sx={{width:"80%"}} />
    </Stack>




        </Stack>

        <Stack direction={"row"} gap={5} mt={5} mb={2} flexWrap={"wrap"}  sx={{justifyContent:{xs:"center",sm:"center",lg:"space-between"}}} >

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

       <Skeleton variant="rounded" width={210} height={60} sx={{ margin: "20px auto"}} />

    </Container>
    
  )
}

export default Loading
