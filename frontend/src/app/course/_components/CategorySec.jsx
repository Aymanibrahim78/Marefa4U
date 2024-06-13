'use client'
import '../[courseTitle]/coursePage.css'
import { Box, Stack,ToggleButton,ToggleButtonGroup, } from "@mui/material"
import { useState } from "react";

const CategorySec = ({categoryApi ,filterByCategory}) => {

    const [alignment, setAlignment] = useState('all');

    const handleChange = (event, nextView) => {
      if (nextView !== null) {
        setAlignment(nextView);
      }
    };
    const allCategory =["all",...new Set(categoryApi.map((item)=>{return item?.attributes?.course_category?.data?.attributes?.category}))]

    const onFilter = (cat) => {
      filterByCategory(cat)
       
     }

  return (
  <Box sx={{display:'flex',justifyContent:"center",mb:5}} >


<ToggleButtonGroup
      
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className='btn-group-category'
    >
      {allCategory.map((item)=>{
        return(

          <ToggleButton key={item} onClick={()=>{onFilter(item)}} className='btn-category' value={item} >{item}</ToggleButton>
        )
      })}
   

    </ToggleButtonGroup>

    </Box>
  )
}

export default CategorySec
