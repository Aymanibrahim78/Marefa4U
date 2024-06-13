import NotFound from "../../not-found";
import ContainerPage from "../_components/ContainerPage";
import Loading from "./loading";


async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 1000))

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cousrses?populate[instructor][populate]=Image&populate[Lessons][populate]=*&populate[Image][populate]&populate[course_category][populate]`, {
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  // read route params

  const data = await getData();

  const courseTitle = params.courseTitle;
  const decodedCourseName = decodeURIComponent(courseTitle); // فك ترميز الاسم

  const infoCourse = data.data.find((course) => {
    return course.attributes.title === decodedCourseName;
  });

  if (!infoCourse) {
    return {
      title: "Not Found",
      description: "Not Found Page",
    };
  }

  return {
    title: infoCourse?.attributes?.title,
    description: infoCourse?.attributes?.description,
  };
}

const CoursesPage = async ({ params }) => {


  const data = await getData();
  const courseTitle = params.courseTitle;

  const decodedCourseName = decodeURIComponent(courseTitle); // فك ترميز الاسم
  const infoCourse = data?.data?.find((course) => {
    return course?.attributes?.title === decodedCourseName;
  });

  

  if (!infoCourse) {
    return <NotFound />;
  }

  return (
    // <Suspense fallback={<Loading />}>
      <ContainerPage
        category={infoCourse?.attributes?.course_category?.data?.attributes?.category}
        title={infoCourse?.attributes?.title}
        Lessons={infoCourse?.attributes?.Lessons}
        language={infoCourse?.attributes?.language}
        image={infoCourse?.attributes?.Image?.data?.attributes?.url}
        level={infoCourse?.attributes?.level}
        NumberOfLessons={infoCourse?.attributes?.Lessons?.length}
        NumberOfStudents={infoCourse?.attributes?.NumberOfStudents}
        description={infoCourse?.attributes?.description}
        imageInstructor={infoCourse?.attributes?.instructor?.data?.attributes?.Image?.data?.attributes.url}
  nameInstructor={infoCourse?.attributes?.instructor?.data?.attributes?.name}
  jobInstructor={infoCourse?.attributes?.instructor?.data?.attributes?.job}
  apiAll={data.data}
  // similarCourses={infoCourse?.attributes?.course_category?.data?.attributes?.courses.data}
      />
    //  </Suspense>
  );
};

export default CoursesPage;
