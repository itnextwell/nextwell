import './stiles/Contact.css'

const Contact = () => {
  return (
    <div className='container_contact'>
        <section>
                <img className='imag_section_contac' src="next.png" alt="" />
                <article className='article_contact'>
                    <div className='cont_contact'>
                    <h4 className='title_contact'>Datos de Contacto</h4>
                    <p>Cra 7P # 35B-51 Via Bogotá – Palermo, Huila 412007, Colombia</p>
                    <p>a.admon@next-well.com</p>
                    <p>+57 318 3638729</p>

                    </div>
                </article>
                <article className='article_contact'>
                    <div className='cont_contact'>
                    <h4 className='title_contact'>Horario</h4>
                    <p>Lun-Vie 7:30-18:00</p>
                    <p>Sáb 8:00-12:00</p>
                    </div>
                   
                </article>

        </section>
        
    </div>
  )
}

export default Contact