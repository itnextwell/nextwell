import { Link, useNavigate } from "react-router-dom"
import './stiles/Header.css'
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const hanbleClick=()=>setIsOpen(!isOpen)
  
  const navigate=useNavigate()
  const handleInit=()=>{
    navigate('/')
  }
  return (
    <div >
        <header className="header_contenedor">
            <div className="menu">
              <div onClick={handleInit}>
              <img className='logo_python' src="next.png" alt="python" />

              </div>
           
            <nav className="header_nav">
                <ul className={`header_ul ${isOpen && "open"}`}>
                    <li className="header_li" ><Link className="link" to='/'>Inicio</Link></li>
                    <li className="header_li" ><Link className="link" to='/about'>Quienes somos</Link></li>
                </ul>
                <div className={`nav_toggle ${isOpen && "open"}`} onClick={hanbleClick}>
                  <spa><i className='bx bx-menu'></i></spa>
                  <spa></spa>
                  <spa></spa>
                </div>
            </nav>
            </div>
        </header>
       
    </div>
  )
}

export default Header