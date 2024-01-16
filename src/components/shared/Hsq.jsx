import { Link } from 'react-router-dom'
import './stiles/Hsq.css'

const Hsq = () => {
   return (
    <div className='container_hsq'>
    <h1 className="section_title_hsq">Sobre  nosotros</h1>

    <section className="section_hsq_im">
        <div className='section_imag_hsq'>
            <img className='imag-section_hsq'  src="12.jpg" alt="" />
            <h4 className='title_sec_imag_hsq'>NEXT-WELL SAS <i className='bx bxs-share-alt'></i></h4>
            <p className='parrafo_news_hsq'>Línea de fibra óptica con más de 5 años
                   operando, pionera en la innovación de
                    servicios a pozo con fibra óptica <Link className='text_ver' to='/about'>ver más.</Link></p>
            
            </div>
        <div className='section_imag_hsq'>
            <img className='imag-section_hsq' src="9.jpeg" alt="" />
            <h4 className='title_sec_imag_hsq'>NUESTROS PRINCIPIOS  <i className='bx bxs-share-alt'></i></h4>
             <p className='parrafo_news_hsq'>La misión de NEXT-WELL S.A.S es proveer
                    servicios con tecnología de fibra <Link className='text_ver' to='/about'>ver más.</Link></p>
            </div>
        <div className='section_imag_hsq'> 
        <img className='imag-section_hsq' src="11.jpeg" alt="" />
        <h4 className='title_sec_imag_hsq'>POLITICA HSEQ <i className='bx bxs-share-alt'></i></h4>
         <p className='parrafo_news_hsq'>Para NEXT-WELL S.A.S es muy importante
          cumplir los estándares <Link className='text_ver_hsq' to='/about'>ver más.</Link>  </p>
        </div>
       

    </section>

    </div>
)
}

export default Hsq