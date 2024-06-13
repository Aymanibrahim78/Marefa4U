import React from "react";
import CardCategory from "./_components/CardCategory";
import { Container, Stack } from "@mui/material";
import TitlePage from "@/_components/TitlePage";
import NotFoundSec from "@/_components/NotFoundSec";

async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}course-categories?populate[Image][populate]`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Category",
  description: `Discover free courses in various categories on "Marefa4u". Learn in the field that interests you and achieve your educational goals.`,
};

const page = async () => {
  const data = await getData();

  if (data.data.length < 1) {
    return (
      <>
    <TitlePage title={"Category"} />
    <Container maxWidth="lg">
     
      <NotFoundSec title={"Category"} />
    </Container>
    </>
    );
  }

  return (
    <>
      <TitlePage title={"Category"} />

      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          gap={5}
          mb={5}
          flexWrap={"wrap"}
          sx={{
            justifyContent: { xs: "center", sm: "center", lg: "space-between" },
          }}
        >
          {data?.data?.reverse().map((item) => {
            return (
              <CardCategory
              key={item.id}
                title={item?.attributes?.category}
                image={item?.attributes?.Image?.data?.attributes?.url}
              />
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default page;
