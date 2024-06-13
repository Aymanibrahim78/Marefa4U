import './ShareExperiences.css'
import { Stack, Container ,Box} from "@mui/material";
import Image from "next/image";


const ShareExperiences = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction={"row"}  gap={5} flexWrap={"wrap"} my={5} alignItems={"center"} sx={{justifyContent:{xs:"center",sm:"center",lg:"space-between"},minHeight:"60vh"}}>
        <Box className='info-right-sec'>
          <h3 className='title-shere-experiences'>Pass on your wisdom, share experiences</h3>
          <p className='description-shere-experiences'>
            We believe everyone has something to give. Share your skills &
            experience with students around the world by teaching free or paid.
            from multiple countries.
          </p>
          <ui  className='list-shere-experiences' >
            <li  className='item-list-shere-experiences' >Publish the course you want</li>
            <li  className='item-list-shere-experiences' >Teach what you know</li>
            <li  className='item-list-shere-experiences' >Help learners gain new skills</li>
            <li  className='item-list-shere-experiences' >Expand your professional network</li>
          </ui>
        </Box>

        <Box className='img-right-sec'>
        <Image
              src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718239792/wXnRJJptn2wypUp008SONkIiEXE_vpwmre.webp"
              alt="Logo Image"
              width={400}
              height={400}
              className='img'
            />
                <Image
              src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718239806/XUqtQvOrS5T90lwaaSWyDNawnEQ_zrtzt4.svg"
              alt="Logo Image"
              width={400}
              height={400}
              className='back'
            />
        </Box>
      </Stack>
    </Container>
  );
};

export default ShareExperiences;
