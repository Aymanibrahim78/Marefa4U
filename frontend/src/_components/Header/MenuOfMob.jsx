"use client"

import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

const MenuOfMob = () => {
    const [showMenu, setShowMenu] = useState("none");
    const [showMenuIcon, setShowMenuIcon] = useState("block");
  const {user} =useUser();

  return (
    <div>

<MenuIcon onClick={()=>{setShowMenu("flex ") ;setShowMenuIcon("none !important")}} className='menu-close-icon' sx={{color:"#2CAAC1" ,fontSize:"35px",cursor:"pointer",display:showMenuIcon}} />
<CloseIcon onClick={()=>{setShowMenu("none"),setShowMenuIcon("block !important")}}   sx={{color:"#2CAAC1" ,fontSize:"35px",cursor:"pointer",display:showMenu}}/>
<nav style={{display:showMenu}} className='bg-nav-link-mob'>
<ui className="nav-header-mob">
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
            {!user?(<Link style={{all:"unset"}} href='/sign-in' ><button className="signin-btn-mob">Sign In</button></Link>):""}
         

          </ui>

</nav>
      
    </div>
  )
}

export default MenuOfMob
