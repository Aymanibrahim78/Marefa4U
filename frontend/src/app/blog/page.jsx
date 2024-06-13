import React from 'react'
import {Box, Container, Stack, Typography} from '@mui/material'
import TitlePage from '@/_components/titlePage'
import CardLastBlog from './_components/CardLastBlog'
import CardBlogInBlogPage from './_components/CardBlogInBlogPage'
import NotFoundSec from '@/_components/NotFoundSec'

async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blogs?populate=*`, {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json():
}

export const metadata = {
  title: "Blog",
  description: `Explore "Marefa4u" blogs for valuable articles and educational tips on various topics. Take advantage of our resources to enhance your learning experience!`,
};

const page = async () => {

  const data  = await getData();
  const dateFun = (date) => {
    const formattedDate = new Date(date);
     
    const dateString = formattedDate.toDateString();
    return dateString
  
  }
  // data.data.shift();
  


if(data.data.length<1){
  return (
    <>

   
     <TitlePage title={"Blog & Resources"} />

     <NotFoundSec title={"Blog & Resources"} />


     </>
     
    )

}

return (
  <>

 
   <TitlePage title={"Blog & Resources"} />



<Container maxWidth="lg">

<CardLastBlog  title={data?.data?.slice(-1)[0]?.attributes?.title} description={data?.data?.slice(-1)[0]?.attributes?.description}
      img={data?.data?.slice(-1)[0]?.attributes?.Image.data.attributes.url} date={dateFun(data?.data?.slice(-1)[0]?.attributes?.createdAt)} category={data?.data?.slice(-1)[0]?.attributes?.category}/>

<Stack direction={"row"} gap={2} flexWrap={"wrap"} my={4} >
  {data.data.reverse().map((item)=>{
    return(

      <CardBlogInBlogPage title={item.attributes.title} description={item.attributes.description}
      img={item.attributes.Image.data.attributes.url} date={dateFun(item.attributes.createdAt)} category={item.attributes.category} /> 
    )
  })}



</Stack>

    


  </Container>

    
  </>
)


}
export default page
