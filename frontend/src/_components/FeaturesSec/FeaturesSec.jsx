
import './FeaturesSec.css'
import {Container,Stack,Box} from '@mui/material'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';



const FeaturesSec = () => {


  return (
    
      <Container maxWidth="lg">

        <Stack
       direction={"row"}
        className='FeaturesSec'
        >

            <Box className='box-about-us-in-features'>
                <h3  className='title-features-about-us' >About Us</h3>
                <p className='description-features'>Dive into today's trendiest courses, from tech essentials like Python to well-being topics such as mental health and nutrition.</p>
            </Box>

            <Box className='box-border-features'>
                <VerifiedOutlinedIcon sx={{fontSize:"40px",color:"#969696"}}/>
                <h5 className='title-features'>Best Tutors</h5>
                <p className='description-features'>Unlock your potential with the best tutors who inspire to your unique learning style.</p>
            </Box>

            <Box className='box-border-features'>
                <AllInclusiveOutlinedIcon  sx={{fontSize:"40px",color:"#969696"}}  />
                <h5 className='title-features'>Flexible</h5>
                <p className='description-features'>Choose a tutor who is flexible in adapting to your learning style and schedule.</p>

            </Box>


            <Box className='box-border-features'>
                <VerifiedOutlinedIcon sx={{fontSize:"40px",color:"#969696"}} />
                <h5 className='title-features'>Easy Access</h5>
                <p className='description-features'>Opt for a tutor with easy access, ensuring convenience for your learning sessions.</p>

            </Box>

        </Stack>

        
      </Container>
      
    
  )
}

export default FeaturesSec
