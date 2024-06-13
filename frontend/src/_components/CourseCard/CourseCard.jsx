'use client'

import { Box, Stack ,Rating, Typography,Skeleton } from "@mui/material";
import "./CourseCard.css";
import Link from "next/link";
import Image from "next/image";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const CourseCard = ({title,NumberOfStudents,image,rating,NumberOfLessons,price,Lessons}) => {
  function calculateTotalTime(lessons) {
    let totalTime = 0;
    lessons.forEach((lesson) => {
      totalTime += lesson.Time;
    });
    return totalTime.toFixed(0);
  }
  
    let  totalTime = calculateTotalTime(Lessons)


  return (


    


   
 
   <Box className="card-course">
  <Box>
        <Image
          src={image}
          alt="Image Courses "
          width={300}
          height={200}
          className='img-card-course'
          title={title}
          
        />
        
    
 </Box>
     

      <Link href={`/course/${title}`}>

        <Typography className="title-in-card-course" component="h6" variant="h6" > {title}</Typography>
      </Link>
     
      <Stack className="info-in-card-course" direction={"row"} gap={2} justifyContent={"space-between"} my={2} >
        <Stack  direction={"row"}  alignItems={"center"}   justifyContent={"space-between"} gap={0.25} >
          <DescriptionOutlinedIcon sx={{ fontSize: "19px" }} />
        <Typography  component="span" >{NumberOfLessons} Lessons </Typography>

          
        </Stack>
        <Stack direction={"row"} alignItems={"center"}   justifyContent={"space-between"} gap={0.25}  >
          <AccessTimeOutlinedIcon sx={{ fontSize: "19px" }} />
        <Typography  component="span" >{totalTime>=60?`${(totalTime/60).toFixed(1)} Hour`:`${totalTime} Minutes`}  </Typography>

          
        </Stack>
        <Stack direction={"row"} alignItems={"center"}  justifyContent={"space-between"} gap={0.25}  >
          <AccountCircleOutlinedIcon sx={{ fontSize: "19px" }} />
        <Typography  component="span" >{NumberOfStudents>1000? `${NumberOfStudents/1000}K` : NumberOfStudents } Students </Typography>

         
        </Stack>
      </Stack>

      <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
      <Typography className='price-course-in-card'  component="span" >{price<=0?"Free":`$ ${price}`} </Typography>

      
      <Rating name="size-small" readOnly  precision={0.1} defaultValue={rating} size="small" my={2}/>

      </Stack>
    </Box>


    
  );
};

export default CourseCard;
