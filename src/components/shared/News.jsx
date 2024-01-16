
import { Link } from 'react-router-dom'
import './stiles/News.css'
const News = () => {
    return (
        <div className='container_news'>
            <h1 className="section_title">Actualización</h1>

            <section className="section_news_im">
                <div className='section_imag'>
                    <img className='imag-section'  src="1.jpg" alt="" />
                    <h4 className='title_sec_imag'>REGISTRO DE POZO GEOTERMICO <i className='bx bxs-share-alt'></i></h4>
                    <p className='parrafo_news'>Línea de fibra óptica con más de 5 años
                           operando, pionera en la innovación de
                            servicios a pozo con fibra óptica <Link className='text_ver' to='/about'>ver más.</Link></p>
                    
                    </div>
                <div className='section_imag'>
                    <img className='imag-section' src="3.jpg" alt="" />
                    <h4 className='title_sec_imag'>PATENTE TECNOLOGICA  <i className='bx bxs-share-alt'></i></h4>
                     <p className='parrafo_news'>La misión de NEXT-WELL S.A.S es proveer
                            servicios con tecnología de fibra <Link className='text_ver' to='/about'>ver más.</Link></p>
                    </div>
                <div className='section_imag'> 
                <img className='imag-section' src="4.jpg" alt="" />
                <h4 className='title_sec_imag'>POR DEFINIR <i className='bx bxs-share-alt'></i></h4>
                 <p className='parrafo_news'>Para NEXT-WELL S.A.S es muy importante
                  cumplir los estándares <Link className='text_ver' to='/about'>ver más.</Link>  </p>
                </div>
               

            </section>

            </div>
    )
}

export default News