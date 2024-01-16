
import './stiles/News.css'
const News = () => {
    return (
        <div className='container_news'>
            <h1 className="section_title">Actualización</h1>

            <section className="section_news_im">
                <div className='section_imag'>
                    <img className='imag-section'  src="1.jpg" alt="" />
                    
                    <p className='parrafo_news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Omnis vel atque, illum ad quos blanditiis, optio modi 
                        debitis tenetur sint expedita alias eaque, eos quis dolorum
                         qui exercitationem. Optio, autem.</p>
                    
                    </div>
                <div className='section_imag'>
                    <img className='imag-section' src="3.jpg" alt="" />
                     <p className='parrafo_news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Omnis vel atque, illum ad quos blanditiis, optio modi 
                        debitis tenetur sint expedita alias eaque, eos quis dolorum
                         qui exercitationem. Optio, autem.</p>
                    </div>
                <div className='section_imag'> 
                <img className='imag-section' src="4.jpg" alt="" />
                 <p className='parrafo_news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Omnis vel atque, illum ad quos blanditiis, optio modi 
                        debitis tenetur sint expedita alias eaque, eos quis dolorum
                         qui exercitationem. Optio, autem.</p>
                </div>
               

            </section>

            </div>
    )
}

export default News