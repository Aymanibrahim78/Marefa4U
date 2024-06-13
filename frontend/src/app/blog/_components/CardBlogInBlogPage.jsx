'use client'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import './Styling.css'
import Image from 'next/image'
import { EventNoteOutlined } from '@mui/icons-material'
import Link from 'next/link'

const CardBlogInBlogPage = ({title,description,img,date,category}) => {
    const theme =useTheme();
  return (
    <Stack direction={"row"} gap={2}  className="box-card-blog-in-blog-page" >
      
      <Box className="left-blog-in-blog-page">
      <Link  href={`/blog/${title}`} >
        <Image
          src={img}
          alt="Logo Image"
          width={400}
          height={400}
          className="img-card-blog-in-blog-page"
        />
        </Link>
      </Box>

      <Box className="right-blog-in-blog-page">
      <Link  href={`/blog/${title}`} >

        <Typography
          sx={{ fontSize: "20px", fontWeight: "700" }}
          variant="body1"
        >
         {title}
        </Typography>
        <Typography sx={{ color: "#AAAAAA",fontSize: "14px" }} my={1} variant="body1">
          
          {description?.length <200 ? description : `${description?.slice(0, 199)}...`}
        </Typography>

        <Stack direction={"row"} gap={2} alignItems={"center"} mt={2}>
          <Typography color={theme.palette.text.secondary} sx={{fontSize: "12px"}} variant="body2">
            <EventNoteOutlined sx={{ color: "#2caac1",mr:1,mb:1 }} fontSize="small" />
           {date}
          </Typography>
          <Typography
            className="category-blog-in-card-in-home-page"
            variant="body2"
          >
            {category}
          </Typography>
        </Stack>
        </Link>

      </Box>


    </Stack>
  )
}

export default CardBlogInBlogPage
