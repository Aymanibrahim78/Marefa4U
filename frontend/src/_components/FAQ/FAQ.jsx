'use client'

import { useState } from 'react';
import './FAQ.css'
import {Box, Container, Stack,Accordion,AccordionDetails,AccordionSummary,Typography,} from '@mui/material'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const FAQ = ({FAQDataApi}) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  

  return (
   <Container maxWidth="lg">
    <Stack direction={"row"} alignItems={"center"}  gap={5} flexWrap={"wrap"} my={5}  sx={{justifyContent:{xs:"center",sm:"center",lg:"space-between"},minHeight:"60vh", }}>
        
    <Box sx={{width:{xs:"100%",sm:"100%",lg:"35%"}}}>
      <Typography sx={{fontWeight:"800",my:3,fontSize:"35px"}} variant="h4" component="h4" >Frequently asked questions</Typography>
      <Typography sx={{fontSize:"20px",lineHeight:"30px",color:"#AAAAAA"}} variant="p" component="p" >Our dedicated support team is available around the clock to assist you with any queries or technical issues you might encounter</Typography> 
    </Box>

    <Box sx={{width:{xs:"100%",sm:"100%",lg:"60%"},}}>


{   FAQDataApi.map((item)=>{
  

  return(
       <Accordion key={item.id}  expanded={expanded === item.attributes.title} onChange={handleChange(item.attributes.title)} >
        <AccordionSummary
          expandIcon={<ArrowCircleDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{item.attributes.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.attributes.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
})}

{FAQDataApi.length<1&&<Typography className='text-no-questions'>There are no questions</Typography>}

{/* <h1>There are no questions</h1> */}
      

    </Box>


    </Stack>

     
   </Container>
  )


}

export default FAQ
