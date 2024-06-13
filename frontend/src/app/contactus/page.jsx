import React from 'react'
import ContainerContactUS from './_ContainerContactUS'
import {Container} from '@mui/material'
import TitlePage from '@/_components/TitlePage'

export const metadata = {
    title: "Contact Us",
    description: `Contact us at "Marefa4u" for support and to answer your inquiries. We are here to help you achieve your educational goals.`,
  };
const page = () => {
  return (
    <>
    <TitlePage title={"Contact Us"} />

<Container maxWidth="lg">
  
    <ContainerContactUS/>
</Container>

      
    </>
  )
}

export default page
