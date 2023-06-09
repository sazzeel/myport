import React from 'react'; 
import Navbar from './Navbar';

function Header() {
  return (
    <div id= 'main'>
      <Navbar/>
      <div className= 'name'>
        <h1><span>This is my landing page buhahah</span> It is what it is so be it </h1>
        <p className= 'details'> My name is.... My name is....</p>
        <a href= '#' className= 'cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header
