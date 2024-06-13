'use client'
import { Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import './Styling.css'
import Link from 'next/link'
const CardBlogInHomePage = ({title,img,date,category}) => {
  const theme =useTheme();
  return (
    
    <Stack gap={2}   direction={"row"} className='box-card-blog-in-card-in-home-page' >

    <Box className='left' >
          <Link  href={`/blog/${title}`} >

    <Image
              src={img}
              alt="Logo Image"
              width={400}
              height={250}
              className='img-blog-in-card-in-home-page'
            />
    </Link>

    </Box>
    <Box className='right'>
    <Link  href={`/blog/${title}`} >

        <Typography className='title-blog-in-card-in-home-page' color={theme.palette.text.primary} variant="body1" >{title}</Typography>

        <Stack direction={"row"} gap={2} alignItems={"center"} >
        <Typography color={theme.palette.text.secondary} className='date-blog-in-card-in-home-page' variant="body2" >{date}</Typography>
        <Typography className='category-blog-in-card-in-home-page' variant="body2" >{category}</Typography>

        </Stack>
    </Link>

    </Box>
            


        </Stack>

      
    
  )
}

export default CardBlogInHomePage
