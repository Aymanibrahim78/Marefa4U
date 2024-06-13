'use client'
import "./Header.css";
import Image from "next/image";
import { Box, Stack, Container, Button } from "@mui/material";
import React from "react";
import Link from "next/link";
import DarkModeToogle from "./DarkModeToogle";
import MenuOfMob from "./MenuOfMob";
import { UserButton, useUser } from "@clerk/nextjs";
const Header = () => {
  const {user} =useUser();
  return (
      <header className='header'>
    <Container maxWidth="lg">

      
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718217199/Logo-website-Marefa4u_nennrj.png"
              alt="Logo Image"
              width={150}
              height={60}
            />
          </Link>
        </Box>
        <nav>
          <ui className="nav-header">
          <li>
              <Link className="item-nav-header" href="/">
              Home
              </Link>
            </li>
         
            <li>
              <Link className="item-nav-header" href="/course">
                Our Courses
              </Link>
            </li>
            <li>
              <Link className="item-nav-header" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="item-nav-header" href="/contactus">
                Contact Us
              </Link>
            </li>
          
            <li>
              <Link className="item-nav-header" href="/faq">
              faq
              </Link>
            </li>

            
          </ui>
        </nav>

        <div className="right-sec-header ">
          {!user?
          (<Link style={{all:"unset"}} href='/sign-in' ><button className="signin-btn">Sign In</button></Link>):
          (< UserButton  afterSignOutUrl="/" / >)
          }
          <DarkModeToogle />
  <MenuOfMob/>
        </div>


      </Stack>


    </Container>
      </header>
  );
};

export default Header;
