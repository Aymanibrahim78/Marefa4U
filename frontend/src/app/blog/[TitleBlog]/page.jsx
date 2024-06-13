import { BlocksRenderer,  } from '@strapi/blocks-react-renderer';
import {Box, Container, Typography ,Stack} from '@mui/material'
import "./PageItemsBlog.css"
import '../_components/Styling.css'
import { EventNoteOutlined } from '@mui/icons-material';
import Image from 'next/image';
import NotFound from '@/app/not-found';


async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 3000))
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blogs?populate=*`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }

  export async function generateMetadata({ params }) {
    // read route params
  
    const data = await getData();
    const blogTitle = params.TitleBlog;
    const decodedBlogName = decodeURIComponent(blogTitle); // فك ترميز الاسم
    const blogs = data.data.find((blog) => {
      return blog.attributes.title === decodedBlogName;
    });
  
    if (!blogs) {
      return {
        title: "Not Found",
        description: "Not Found Page",
      };
    }
  
    return {
      title: blogs.attributes.title,
      description: blogs.attributes.description,
    };
  }

const page = async ({params}) => {

    const data  = await getData();
    const blogTitle = params.TitleBlog;
    const decodedBlogName = decodeURIComponent(blogTitle); // فك ترميز الاسم
    const blogs = data.data.find((blog) => {
      return blog.attributes.title === decodedBlogName;
    });

    if (!blogs) {
      return <NotFound />;
    }
    const formattedDate = new Date(blogs.attributes.createdAt);
   
    const dateString = formattedDate.toDateString();
  
    


  return (
    
 
        <Container maxWidth="lg" className='contPaae'   sx={{direction:blogs.attributes.languageArabic==true ?"rtl":"ltr"}} >
            <Box>
            <Typography sx={{fontSize:{xs:"20px",sm:"25px",lg:"35px"},fontWeight:"700",mt:5,}} variant="body1" >{blogs.attributes.title}</Typography>

            <Typography sx={{ color: "#AAAAAA" }} my={2} variant="body1">
          {blogs.attributes.description}
        </Typography>
     

            <Stack direction={"row"} gap={2} alignItems={"center"} mt={2}>
          <Typography color={"#A2A2A2"} variant="body2">
            <EventNoteOutlined sx={{ color: "#2caac1" ,mx:1}} fontSize="small" />
            {dateString}
            
          </Typography>
          <Typography
            className="category-blog-in-card-in-home-page"
            variant="body2"
          >
           {blogs.attributes.category}
          </Typography>
        </Stack>
     
        <Image
          src={blogs.attributes.Image.data.attributes.url}
          alt="Logo Image"
          width={400}
          height={300}
          className="img-blog-in-blog-page-item"
        />
            </Box>
          
       <Box px={2} my={5}>
         
<BlocksRenderer  content={blogs.attributes.BlogContent}  />
       </Box>
      
        </Container>
 
  )
}

export default page
