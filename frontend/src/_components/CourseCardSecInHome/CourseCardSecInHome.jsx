import CourseCard from "../CourseCard/CourseCard";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

async function getData() {
  // await new Promise(resolve => setTimeout(resolve,cousrses 3000))

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cousrses?populate=*`,  {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CourseCardSecInHome = async () => {
  const data = await getData();



  if(data.data.length>=1){
   return (
    <Container maxWidth="lg">
      <Typography variant="body1" sx={{fontSize:"25px",mt:4,mb:3,fontWeight:"700"}} >Last Courses</Typography>

      <Stack
        direction={"row"}
        gap={5}
        mb={5}
        flexWrap={"wrap"}
        sx={{
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        }}
      >
        {data.data.reverse().splice(0,6).map((item) => {
        //  totalTime = calculateTotalTime(item.attributes.Lessons)
        
          return (
            <CourseCard
              key={item.id}
              title={item?.attributes?.title}
              NumberOfStudents={item.attributes.NumberOfStudents}
              rating={item?.attributes?.rating}
              image={item.attributes.Image.data.attributes.url}
              NumberOfLessons={item.attributes.Lessons.length}
              price={item?.attributes?.price}
              
              Lessons={item.attributes.Lessons}

            />
          );
        })}
      </Stack>
      <Link href={"/course"} style={{all:"unset"}} >
    <button className='btn-show-more' >Explore courses</button>
    </Link>
    </Container>
  );
  }

  else{
    return(
      <>
      </>
    )
  }
  
};

export default CourseCardSecInHome;
