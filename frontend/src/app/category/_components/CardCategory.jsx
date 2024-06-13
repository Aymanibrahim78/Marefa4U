import { Box, Typography } from '@mui/material'
import './StylingCategory.css'
import Image from 'next/image'
import Link from 'next/link'

const CardCategory = ({image,title}) => {
  return (
    <Link href={`/category/${title}`} >
    
    <Box className='box-card-category' >

<Image
              src={image}
              alt="Logo Image"
              width={400}
              height={400}
              className='img-category-card'
            />
            <Typography variant="body1" className='title-category-card' >{title}</Typography>


      
    </Box>
</Link>

  )
}

export default CardCategory
