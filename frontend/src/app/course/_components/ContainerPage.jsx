'use client'
import { Container, Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import VideoSec from "./VideoSec/VideoSec";
import "../[courseTitle]/coursePage.css";

// Icon Mui
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CourseCard from "@/_components/CourseCard/CourseCard";


const ContainerPage = ({
  category,
  title,
  Lessons,
  language,
  NumberOfLessons,
  NumberOfStudents,
  description,
  image,
  level,
  imageInstructor,
  nameInstructor,
  jobInstructor,
  apiAll,
 
  
}) => {


 const newArr =apiAll.filter((item)=>{
  if(title){
    return  item.attributes?.course_category?.data?.attributes?.category === category;

  }
 })
 function calculateTotalTime(lessons) {
  let totalTime = 0;
  lessons.forEach((lesson) => {
    totalTime += lesson.Time;
  });
  return totalTime.toFixed(0);
}

  let  totalTime = calculateTotalTime(Lessons)

  return (
    

    <Container maxWidth="lg">
      <nav aria-label="Breadcrumb" className="flex mb-3 mt-5 ">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600 border-cont">
          <Link href={"/"}>
            <li className="flex items-center">
              <span className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900 logo-home bg-home ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="ms-1.5 text-xs font-medium bg-home">
                  
                  Home
                </span>
              </span>
            </li>
          </Link>
         
        {category&&( <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 bg-home"></span>

            <Link
              href={`/category/${category}`}
              className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 logo-home bg"
            >
              {category}
            </Link>
          </li>)} 
        
 
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 bg-home"></span>

            <span className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900 logo-home bg title-name">
              {title.length<20 ? title : `${title.slice(0, 20)}...`}
            </span>
          </li>
        </ol>
      </nav>

      <Stack
        direction={"row"}
        gap={2}
        my={2}
        flexWrap={"wrap"}
        sx={{ justifyContent: { xs: "center", sm: "space-between" } }}
      >
        <Box className="info-course-in-course-page">
          <Image src={image} alt="Logo Image" width={300} height={300} />

          <Typography
            sx={{ fontWeight: "700", fontSize: "22px", mb: 2, mt: 2 }}
            variant="h6"
            component={"h6"}
          >
            {title}
          </Typography>
          <Stack direction={"column"} gap={1}>
            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <LanguageOutlinedIcon fontSize="sm" />
              <Typography variant="body" fontSize={"sm"}>
                language : {language}
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <SignalCellularAltIcon fontSize="sm" />
              <Typography variant="body" fontSize={"sm"}>
                Level : {level}
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <DescriptionOutlinedIcon fontSize="sm" />
              <Typography variant="body" fontSize={"sm"}>
                
                Lessons : {NumberOfLessons}
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <AccessTimeOutlinedIcon fontSize="sm" />
              <Typography variant="body" fontSize={"sm"}>
              Time : {totalTime>=60?`${(totalTime/60).toFixed(1)} Hour`:`${totalTime} Minutes`} 
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={0.5} alignItems={"center"}>
              <AccountCircleOutlinedIcon fontSize="sm" />
              <Typography variant="body" fontSize={"sm"}>
              Students :  {NumberOfStudents > 1000
                  ? `${NumberOfStudents / 1000}K`
                  : NumberOfStudents}
                
              </Typography>
            </Stack>

          

         
{nameInstructor&&(

<Link href={`/instructor/${nameInstructor}`}>

            <Stack direction={"row"} gap={0.5} className='box-instructor' alignItems={"center"} justifyContent={"space-between"} sx={{p:1}} >
              <Box>
                
                <Typography variant="body1" sx={{fontWeight:"600",}}>{nameInstructor}</Typography>
                {jobInstructor&&( <Typography variant="body1" sx={{fontSize:"15px",fontWeight:'500',color:"GrayText"}} >{jobInstructor}</Typography>)}
               
              </Box>

  {imageInstructor &&(
              <Box>

            <Image src={imageInstructor} alt="Logo Image" style={{width:"60px",height:"60px",borderRadius:"50%"}} width={60} height={60} />
              </Box>
  )}

            </Stack>
</Link>
 )}
          </Stack>
        </Box>

          
        <Box className="description-sec-in-course-page">
          <Typography variant="body1" component={"p"}>
            {description}
          </Typography>
        </Box>
      </Stack>
      
    
        <VideoSec videoLessons={Lessons} />

        <Box sx={{my:5}}>

          <Typography variant="body1" color="#2caac1" sx={{fontSize:"25px",fontWeight:"700",my:2}} >Similar Courses</Typography>


       
             
        <Stack
        direction={"row"}
        gap={5}
        mb={5}
        flexWrap={"wrap"}
        sx={{
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        }}
      >

{newArr.reverse().splice(0,6).map((item)=>{
  return(
    <CourseCard
    key={item.id}
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

   

  );
};

export default ContainerPage;
