"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
const SliderHero = ({SliderData}) => {
 

  return (
    
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      loop={true}
      spaceBetween={30}
      className="mySwiper"
    >

     {SliderData.map((item)=>{
      return(
        <SwiperSlide key={item.id}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          className="slider-cont"
        >
          <Box className="left-slider-info-course">
            <Typography className="title-course-in-hero-sec"  component="p" variant="p" >{item?.attributes?.title}</Typography>
            <Typography className="description-course-in-hero-sec"  component="p" variant="p" >
               {item?.attributes?.description?.length <150 ? item?.attributes?.description : `${item?.attributes?.description?.slice(0, 145)}...`}
            </Typography>
            <Link style={{all:"unset"}} href={`course/${item?.attributes?.title}`}>
            <button className="btn-get-stated-in-hero-sec">
              Get Started
              <EastIcon />
            </button>
            </Link>
          </Box>

          <Box>
            <Image
              src={item.attributes.Image.data.attributes.url}
              alt="banner"
              width={350}
              height={250}
            />
          </Box>
        </Stack>
        
      </SwiperSlide>
      )
     })}
     
      
        
   
      



    </Swiper>
  );
};

export default SliderHero;
