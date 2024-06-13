import React from 'react'
import {Container} from '@mui/material'
import FAQSec from '@/_components/FAQ/FAQSec'
import TitlePage from '@/_components/TitlePage'

export const metadata = {
    title: "FAQ",
    description: "Find answers to all your questions about Marefa4u and our free courses. Check out our FAQ for more information.",
  };
const page = () => {
  return (
    <>
    <TitlePage title={"Frequently asked questions"} />
    <Container maxWidth="lg">

        <FAQSec />

      
    </Container>
    </>

  )
}

export default page
