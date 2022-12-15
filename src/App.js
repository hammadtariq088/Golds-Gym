import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Body/Home'
import Navbar from './Components/Layout/Navbar'
import About from './Pages/About'


const App = () => {
  return (
    <div className="wrapper home-default-wrapper">
      <Navbar/>
      <Routes>  

      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<About/>}/>

      


      </Routes>
    </div>
  )
}

export default App
