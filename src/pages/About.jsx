import Address from '../components/shared/Address'
import './stiles/About.css'

const About = () => {
  return (
    <div className='container_about'>
      <section className='section_about'>

        <div className='img_about'>  <img className='about_imag' src="7.jpeg" alt="" /> </div>
        <div className='parrafos_about'>
        <div className='parrafo_1'>
          <p className='par_1'>
          <span className='letter_1'>NEXT-WELL</span>  es una compañía de innovación tecnológica para
           el sector hidrocarburos, innovación que busca generar la
            diferencia en los servicios que suministra, mediante tecnología
             disruptiva de punta, para brindar soluciones que generen verdadero 
             valor a sus clientes, rompiendo paradigmas y demostrando que si es 
             posible en Colombia hacer algo nuevo, generando tecnología y conocimiento
              para la industria, enmarcados en un ambiente de respeto por el medio 
              ambiente, buenas relaciones con las partes interesadas, total calidad y seguridad en sus operaciones.
          </p>
        </div>
          
          <div className='parrafo_2'>
          <p className='par_2'>
          <span className='letter_2'> Nuestra misión</span> es ayudar a la industria de los hidrocarburos 
          proporcionando información invaluable sobre caudales detallados (ILT/PLT), 
           migración de fluidos (Cross-flow y back-flow, fluidos por detrás de 
           tubería, leaks en tubería y casing), monitoreo de estimulaciones y 
           fracturas en tiempo real, integridad total.

          </p>
        </div> 

        </div>
      </section>
      <Address/>

    </div>
  )
}

export default About