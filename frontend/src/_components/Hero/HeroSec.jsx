
import './HeroSec.css'
import {Container} from '@mui/material'
import SliderHero from './SliderHero'


async function getData() {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}cousrses?populate=*`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HeroSec = async () => {

  const data = await getData();

  const showInSlider = data.data.filter((item)=>{return item.attributes?.showInSlider === true })

  if(data.data.length>=1){
    return (
    <section className='hero-section'>
        <Container maxWidth="lg" sx={{position:"relative"}} >

 

<SliderHero   SliderData={showInSlider?.reverse()} />

 
        

        </Container>
      
    </section>
  )
  }

  else{
    return(
      <>
      
      </>
    )
  }

 
}

export default HeroSec
