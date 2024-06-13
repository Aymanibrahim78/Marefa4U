import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{textAlign:"center",py:10}} >
      
    <Box>

        
<Image
              src="https://framerusercontent.com/images/aXqhLitqkynurqGXUdPCPS7nQU.svg"
              alt="Not Found Image"
              width={400}
              height={300}
              className='img-not-found'


            />
<Link href={"/"} className='link-not-found' >
  Back to homepage
</Link>
      
    </Box>

    </Container>

  )
}

export default NotFound
