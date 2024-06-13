"use client";
import "./Styling.css";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import Link from "next/link";
const CardLastBlog = ({title,description,img,date,category}) => {
  const theme = useTheme();
  return (
    <Stack
      gap={2}
      className="box-last-blog"
      flexWrap={"wrap"}
      alignItems={"center"}
      direction={"row"}
      sx={{ my: 10 }}
    >
      <Box className="left-box-last-blog">
      <Link  href={`/blog/${title}`} >
        

        <Typography
          sx={{ fontSize: "25px", fontWeight: "800" }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography sx={{ color: "#AAAAAA" }} my={2} variant="body1">
        
         {description?.length <250 ? description : `${description?.slice(0, 249)}...`}
        </Typography>

        <Stack direction={"row"} gap={2} alignItems={"center"} mt={2}>
          <Typography color={theme.palette.text.secondary} variant="body2">
            <EventNoteOutlinedIcon sx={{ color: "#2caac1" ,mr:1 }} fontSize="small" />
            {date}
          </Typography>
          <Typography
            className="category-blog-in-card-in-home-page"
            variant="body2"
          >
            {category}
          </Typography>
        </Stack>
      </Link>

      </Box>

      <Box className="right-box-last-blog">
      <Link  href={`/blog/${title}`} >


        <Image
          src={img}
          alt="Logo Image"
          width={400}
          height={250}
          className="img-blog-in-home-page-last"
        />
      </Link>

      </Box>
    </Stack>
  );
};
//  sx={{width:{xs:"100%",sm:"48%",lg:"48%"}}}
export default CardLastBlog;
