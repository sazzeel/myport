import React from 'react'
import Home from './Component/Home'
import {Routes, Route} from 'react-router-dom'
import About from './Component/Aboutus'
import Contact from './Component/Contactus'
import Project from './Component/Project'
import Footer from './Extras/Footer'
import Navbar from './Extras/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path = '/' element = {< Home />} />
      <Route  path="/about" element={<About/>} />
      <Route path = "/contact" element = {<Contact/>} />
      <Route path = "/projects" element={<Project/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
