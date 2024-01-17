import './stiles/Contact.css'

const Contact = () => {
  return (
    <div className='container_contact'>
        <section>
                <img className='imag_section_contac' src="next.png" alt="" />
                <article className='article_contact'>
                    <div className='cont_contact'>
                    <h4 className='title_contact'>Datos de Contacto</h4>
                    
                    <p><i className='bx bxs-map'></i> Cra 7P # 35B-51 Via Bogotá – Palermo, Huila 412007, Colombia</p>
                    <p><i className='bx bx-mail-send' ></i> a.admon@next-well.com</p>
                    <p><i className='bx bxs-phone'></i>+57 318 3638729</p>

                    </div>
                </article>
                <article className='article_contact'>
                    <div className='cont_contact'>
                    <h4 className='title_contact'>Horario</h4>
                <i className='bx bx-user-voice'></i>
                    <p>Lun-Vie 7:30-18:00</p>
                    <p>Sáb 8:00-12:00</p>
                    </div>
                   
                </article>
                <section className='enlaces_seccion'>

                
                <div className='cont_enlaces' ><a className='enlaces' href="mailto:a.admon@next-well.com"><i className='bx bx-envelope'></i> </a></div>
               <div className='cont_enlaces' ><a className='enlaces' href="https://www.google.com/maps/place/NextWell+S.A.S./@2.9503264,-75.3144562,2242m/data=!3m1!1e3!4m6!3m5!1s0x8e3b751afe2a2845:0xefae28c083386d23!8m2!3d2.9502629!4d-75.3123271!16s%2Fg%2F11h7fwllyf?entry=ttu"><i className='bx bx-map'></i>  </a></div> 
                
               <div className='cont_enlaces' ><a className='enlaces' href="https://wa.me/+573183638729"><i className='bx bxl-whatsapp' ></i> </a></div> 
                <div className='cont_enlaces' ><a className='enlaces' href="https://www.linkedin.com/company/next-well"><i className='bx bxl-linkedin'></i> </a></div> 
                </section>                

        </section>
        
    </div>
  )
}

export default Contact