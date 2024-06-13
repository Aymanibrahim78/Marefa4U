import './StylingInstructor.css'
import { Box, Stack, Typography,IconButton } from '@mui/material'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import Link from 'next/link';


const CardInstructorsInPageInstructors = ({nameInstructor,jobInstructor,imageInstructor,facebook,website,youtube}) => {

  
  return (
    <Box className="card-instructor">
      <Box sx={{height:"50%",mb:2}} >
      <Image src={imageInstructor} alt="Logo Image" style={{width:"100%",height:"100%",borderRadius:"50%",borderRadius:"10px"}} width={100} height={100} />

      </Box>

    <Box >
<Link href={`/instructor/${nameInstructor}`} >

      <Typography variant="body1" sx={{fontWeight:'600',transition:"all 0.5s",'&:hover':{color:"#2caac1"},fontSize:"20px"}} >{nameInstructor}</Typography>
</Link>
      <Typography variant="body1" sx={{fontSize:"15px",fontWeight:'500',color:"GrayText"}} >{jobInstructor}</Typography>
    </Box>

    <Stack direction={"row"} sx={{border:"solid 1px red"}} my={4} gap={1} className='social-media' >

      {website? (<a style={{all:'unset'}} target='_blank' href={website}> <IconButton> <LanguageIcon  /></IconButton></a>):""}
      {facebook? (<a style={{all:'unset'}} target='_blank' href={facebook}> <IconButton> <FacebookIcon  /></IconButton></a>):""}
      {youtube? (<a style={{all:'unset'}} target='_blank' href={youtube}> <IconButton> <YouTubeIcon  /></IconButton></a>):""}

               
             
              
    </Stack>



      
    </Box>
  )
}

export default CardInstructorsInPageInstructors
