import { useEffect, useState } from 'react'
import './stiles/Home.css'
import News from '../components/shared/News'



const Home = () => {
  

  
  return (
    
    
    <div>
       <section className='section_home'> 
     <div className='text_content'>

      <div className='h_home'> <h1 className='title_home'>FIBER OPTIC  </h1> </div>
      <div className='h1_home'> <h1 className='title_home'>AND ELECTRIC LINE SERVICES  </h1> </div>
      <div className='h3_home'> <h3 className='title_home2'>DISRUPTIVE INNOVATION  </h3> </div>

     </div>
    
      <div> <img className='img_home' src="im2.jpeg" alt="" /></div>
       
    </section>
        <section className='seccion_news' >
          <News/>

        </section>
       


    </div>
   
  )
}

export default Home