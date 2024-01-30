import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/shared/Header'
import Product from './pages/Product'

function App() {
  

  return (
   <div className='contenedor'> 
   
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/product' element={<Product/>}/>
    </Routes>
   </div>
  )
}

export default App
