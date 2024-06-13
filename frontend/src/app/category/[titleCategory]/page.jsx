import Image from 'next/image'
import '../_components/StylingCategory.css'
import {Box, Container, Stack, Typography} from '@mui/material'
import CourseCard from '@/_components/CourseCard/CourseCard'
import NotFound from '@/app/not-found';
import Loading from './loading';


async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}course-categories?populate[Image][populate]&populate[courses][populate]=Image&populate[courses][populate]=Lessons`,
      {
        next: { revalidate: 1 },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  export async function generateMetadata({ params }) {
   
  
    const data = await getData();
  
    const titleCategory = params.titleCategory;
    const decodedCourseName = decodeURIComponent(titleCategory); // فك ترميز الاسم
  
    const infoCategory = data.data.find((course) => {
      return course.attributes.category === decodedCourseName;
    });
  
    if (!infoCategory) {
      return {
        title: "Not Found",
        description: "Not Found Page",
      };
    }
  
    return {
      title: infoCategory?.attributes?.category,
      description: infoCategory?.attributes?.description,
    };
  }

const page = async ({params}) => {
    const data = await getData();
  
    const titleCategory = params.titleCategory;
    const decodedCourseName = decodeURIComponent(titleCategory); // فك ترميز الاسم
  
    const infoCategory = data.data.find((course) => {
      return course.attributes.category === decodedCourseName;
    });

    if (!infoCategory) {
        return <NotFound />;
      }
  return (
    <Container maxWidth="lg" sx={{my:10}}>
    <Stack direction={"row"} gap={2} flexWrap={'wrap'} justifyContent={"space-between"} >

    <Box  className='left-sec-page-item-category' >
    <Image
              src={infoCategory?.attributes?.Image?.data?.attributes?.url}
              alt="Logo Image"
              width={400}
              height={400}
              className='img-page-item-category'
              
            />

    </Box>

    <Box className='right-sec-page-item-category' >

        <Typography variant="body1" sx={{fontSize:"25px",fontWeight:"700"}} >{infoCategory?.attributes?.category} </Typography>
        <Typography variant="body1" sx={{fontSize:"20px"}} color="GrayText">{infoCategory?.attributes?.description}</Typography>

    </Box>




    </Stack>

    <Box sx={{my:5}}>

   <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "20px", lg: "26px" },
            fontWeight: "700",
            my: 1,
          }}
        >
          Courses from <span style={{color:'#2caac1'}} >{infoCategory?.attributes?.category}</span> 
        </Typography>

            
     
    <Stack
        direction={"row"}
        gap={5}
        mb={5}
        flexWrap={"wrap"}
        sx={{
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        }}
      >

{infoCategory?.attributes?.courses?.data.map((item)=>{
    return(
<CourseCard
             
             kay={item?.id}
             title={item?.attributes?.title}
             NumberOfStudents={item?.attributes?.NumberOfStudents}
             rating={item?.attributes?.rating}
             image={item?.attributes?.Image?.data?.attributes?.url}
             NumberOfLessons={item?.attributes?.Lessons?.length}
             price={item?.attributes?.price}
             Lessons={item?.attributes?.Lessons}

             
           />
    )
})}
    


      </Stack>

         </Box>
        
    </Container>
  )
}

export default page
