

import FAQ from "./FAQ"

async function getData() {
    // await new Promise(resolve => setTimeout(resolve, 1000))
  
    const res = await fetch( `${process.env.NEXT_PUBLIC_API_URL}faqs`,);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  

 

const FAQSec = async () => {
    const data = await getData();
    
  
if(data.data.length<1){
  return(
    <>
    </>
  )
}

  return (
    <>
  
        <FAQ FAQDataApi={data.data.reverse()} />
      
    </>
  )
}

export default FAQSec
