// import { Tajawal } from '@next/font/google';
import "./globals.css";
import Header from "../_components/Header/Header.jsx";

import { CssBaseline } from '@mui/material';
import { ThemeProviderComponent  } from '../_Context/ThemeContext';
import Footer from "@/_components/Footer/Footer";
import {ClerkProvider,} from '@clerk/nextjs'


export const metadata = {
  title: "Marefa4U",
  description: "مَعْرِفَة 4U هو موقع يقدم كورسات مجانية عالية الجودة في مختلف المجالات، مما يتيح للجميع فرصة التعلم والوصول إلى المعرفة بسهولة. انضم إلينا اليوم وابدأ رحلتك التعليمية!",
};

    
    export default function RootLayout({ children }) {

  return (
      <ClerkProvider>

    <html lang="en" >
    
      <body  >
      <ThemeProviderComponent>

     
      <CssBaseline/>
      <Header />
        {children}
        <Footer/>

      </ThemeProviderComponent>
        </body>
    </html>
    </ClerkProvider>
    
  );
}
