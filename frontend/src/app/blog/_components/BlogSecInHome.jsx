import React from 'react'
import CardBlogInHomePage from './CardBlogInHomePage'
import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blogs?populate=*`, {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogSecInHome = async () => {
  const data  = await getData();
const dateFun = (date) => {
  const formattedDate = new Date(date);
   
  const dateString = formattedDate.toDateString();
  return dateString

}

if(data.data.length>=1){


  return (
    <Container maxWidth="lg"   >

      <Box sx={{my:10}} className='sec-blog-card-only' >
        <Typography className='title-sec-blog-card-only' variant="body1">Latest Blog</Typography>

    

   
        
        <Stack direction={"row"} gap={2} flexWrap={"wrap"} justifyContent={"space-between"} >
          {data.data.reverse().slice(0, 4).map((item)=>{
            return(
              
              <CardBlogInHomePage title={item.attributes.title}
               img={item.attributes.Image.data.attributes.url} date={dateFun(item.attributes.createdAt)} category={item.attributes.category}
              />
            )
          })}

      
    
    </Stack>


    <Link href={"/blog"} style={{all:"unset"}} >
    <button className='btn-show-more' >Explore Blog</button>
    </Link>



  </Box>

    </Container>
  )

}



}

export default BlogSecInHome
