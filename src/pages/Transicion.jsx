import { useEffect, useState } from 'react'
import './stiles/Transicion.css'




const Transicion = () => {
 //estado de rotación

 const [rotacionIma, setRotacionIma] = useState(0)

 //imagenes que se quieran agreagar a la rotación de inicio
 const imagenes=[
   'camion.jpg',    
   'next.png',
   'python_1.png',
   '1.jpeg',
 ]

 useEffect(() => {
   const rotation=setInterval(()=>{
     setRotacionIma((prevIndex)=>(prevIndex+1)%imagenes.length)
   },3000)

   return()=>clearInterval(rotation)
 }, [imagenes.length])
 
 return (
   <section className='section_trans'> 
     <div className='h1_home'> <h1>Bienvenidos a Next Well  </h1> </div>
     <div className='img_home'> 
     {imagenes.map((imagen, index) => (
         <img
           key={index}
           src={imagen}
           alt={`Imagen ${index + 1}`}
           className={`image ${index === rotacionIma ? 'visible' : ''}`}
         />
       ))}
     
     
      </div>
   </section>
 )
}

export default Transicion