import React from "react";
import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import '../_components/StylingInstructor.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CourseCard from "@/_components/CourseCard/CourseCard";
import NotFound from "@/app/not-found";


async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}instructors?populate[courses][populate]=*&populate[Image][populate]`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  // read route params

  const data = await getData();

  const instructorTItle = params.instructorTItle;
  const decodedCourseName = decodeURIComponent(instructorTItle); // فك ترميز الاسم

  const infoInstructor = data.data.find((course) => {
    return course.attributes.name === decodedCourseName;
  });

  if (!infoInstructor) {
    return {
      title: "Not Found",
      description: "Not Found Page",
    };
  }

  return {
    title: infoInstructor.attributes.name,
    description: infoInstructor.attributes.job,
  };
}

const page = async ({ params }) => {
  const data = await getData();

  const instructorTItle = params.instructorTItle;
  const decodedCourseName = decodeURIComponent(instructorTItle); // فك ترميز الاسم

  const infoInstructor = data.data.find((course) => {
    return course.attributes.name === decodedCourseName;
  });

  if (!infoInstructor) {
    return <NotFound />;
  }

  return (
    <Container maxWidth="lg"  sx={{my:10}}>





      <Box>

        <Stack direction={"row"} gap={2} flexWrap={'wrap'} justifyContent={"space-between"}>

      

      <Box className='left-sec-page-item-instructor'>
        <Image
          src={infoInstructor?.attributes?.Image?.data.attributes.url}
          alt="Logo Image"
          width={350}
          height={300}
          style={{ borderRadius: "20px" }}
        />
      </Box>

      <Box className='right-sec-page-item-instructor' >

<Typography variant="body1" sx={{fontSize:"20px"}} color="GrayText">{infoInstructor?.attributes?.description}</Typography>

</Box>

  </Stack>

      <Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ fontWeight: "600",fontSize:"25px" }}>
            {infoInstructor?.attributes?.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "15px", fontWeight: "500", color: "GrayText" }}
          >
            {infoInstructor?.attributes?.job}
          </Typography>
        </Box>

        <Stack direction={"row"} sx={{ border: "solid 1px red" }} gap={1} className='social-media' >
        {infoInstructor.attributes.webSite? (<a style={{all:'unset'}} target='_blank' href={infoInstructor.attributes.webSite}> <IconButton> <LanguageIcon  /></IconButton></a>):""}
      {infoInstructor.attributes.facebook? (<a style={{all:'unset'}} target='_blank' href={infoInstructor.attributes.facebook}> <IconButton> <FacebookIcon  /></IconButton></a>):""}
      {infoInstructor.attributes.youtube? (<a style={{all:'unset'}} target='_blank' href={infoInstructor.attributes.youtube}> <IconButton> <YouTubeIcon  /></IconButton></a>):""}
        </Stack>
      </Box>
  </Box>





      <Box my={5}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "20px", lg: "26px" },
            fontWeight: "700",
            my: 1,
          }}
        >
          Courses from <span style={{color:'#2caac1'}} >{infoInstructor.attributes.name}</span> 
        </Typography>

        <Stack
          direction={"row"}
          gap={5}
          flexWrap={"wrap"}
          sx={{
            justifyContent: { xs: "center", sm: "center", lg: "space-between" },
          }}
        >
          {infoInstructor.attributes.courses.data.map((item) => {
            return (
              <CourseCard
                kay={item.id}
                title={item?.attributes?.title}
                NumberOfStudents={item.attributes.NumberOfStudents}
                rating={item?.attributes?.rating}
                image={item.attributes.Image.data.attributes.url}
                NumberOfLessons={item.attributes.Lessons.length}
                price={item?.attributes?.price}
                Lessons={item?.attributes?.Lessons}

               
              />
            );
          })}
        </Stack>
      </Box>


     
    </Container>
  );
};

export default page;
