
'use client'

import CourseCard from "@/_components/CourseCard/CourseCard";
import {  Stack } from "@mui/material";
import { useState } from "react"
import CategorySec from "./CategorySec";


const ContainerCoursesPage = ({dataAPi}) => {

 


const [dataItem,setDataItem] = useState(dataAPi);

    const filterByCategory = (cat) => {
    if(cat==="all"){
      setDataItem(dataAPi)
    }
    else{
      const newArr = dataAPi.filter((item) => {return item?.attributes?.course_category?.data?.attributes?.category === cat})
setDataItem(newArr)
    }
  }
  const handleChange = (event, value) => {
    dataAPi.meta.pagination.page = value
  };
  return (
  
<>
<CategorySec categoryApi={dataAPi}  filterByCategory={filterByCategory} />


<Stack
        direction={"row"}
        gap={5}
        mb={5}
        flexWrap={"wrap"}
        sx={{
          justifyContent: { xs: "center", sm: "center", lg: "space-between" },
        }}
      >
        {dataItem.map((item) => {
          return (
            <CourseCard
              key={item.id}
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


      
   </>
  )
}

export default ContainerCoursesPage
