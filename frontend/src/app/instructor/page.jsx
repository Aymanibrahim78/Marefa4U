import React from 'react'
import {Container, Stack} from '@mui/material'
import TitlePage from '@/_components/TitlePage'
import CardInstructorsInPageInstructors from './_components/CardInstructorsInPageInstructors'


async function getData() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}instructors?populate[Image][populate]`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "instructor",
  description: "Meet the exceptional instructors of Marefa4u and benefit from their expertise and knowledge in various fields. Join our educational community now!",
};


const page = async () => {
  const data = await getData();

  if (data.data.length < 1) {
    return (
      <>
    <TitlePage title={"Instructor"} />
    <Container maxWidth="lg">
     
      <NotFoundSec title={"Instructor"} />
    </Container>
    </>
    );
  }
  return (

<>
    <TitlePage title={"Instructor"}/>

   <Container maxWidth="lg">

   <Stack
        direction={"row"}
        gap={5}
        mb={5}
        flexWrap={"wrap"}
        sx={{
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        }}
      >
        {data?.data?.reverse().map((item)=>{
          return(
             <CardInstructorsInPageInstructors 
             key={item.id}
        nameInstructor={item?.attributes?.name}
        jobInstructor={item?.attributes?.job}
        imageInstructor={item?.attributes?.Image?.data?.attributes?.url}
        facebook={item?.attributes?.facebook}
        website={item?.attributes?.webSite}
        youtube={item?.attributes?.youtube}
        />
          )
        })}

       

      </Stack>


     
   </Container>
</>
  )
}

export default page
