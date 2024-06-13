'use client'

import CourseCardSecInHome from "@/_components/CourseCardSecInHome/CourseCardSecInHome";
import FeaturesSec from "@/_components/FeaturesSec/FeaturesSec";
import HeroSec from "@/_components/Hero/HeroSec";
import ShareExperiences from "@/_components/ShareExperiences/ShareExperiences";
import { Suspense } from "react";
import Loading from "./loading";
import FAQSec from "@/_components/FAQ/FAQSec";
import BlogSecInHome from "../blog/_components/BlogSecInHome";



export default   function Home() {

  return (
   
    <Suspense fallback={<Loading />}>



<>

  
  <HeroSec/>
  <FeaturesSec/>
  <CourseCardSecInHome/>

  <ShareExperiences/>
  <FAQSec/>
  <BlogSecInHome/>

  </>
   </Suspense>


  );
}
