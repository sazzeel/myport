import React, {useState} from 'react';
import logo from '../images/logo.png';

function Navbar() {
    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if(window.scrolly >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  return (
    <nav className= {nav ? 'nav active' : 'nav'}>
      <a href='#' className= 'logo'>
        <img src= {logo} alt= ''/>
      </a>
      <input type= 'checkbox' className= 'menu-btn' id= 'menu-btn'/>
      <label className= 'menu-icon' for= 'menu-btn'>
        <spam className= 'nav-icon'></spam>
      </label>
      <ul className= 'menu'>
        <li><a href= '#' className= 'active'>Home</a></li>
        <li><a href= '#'>Features</a></li>
        <li><a href= '#'>About</a></li>
        <li><a href= '#'>UI SS</a></li>
        <li><a href= '#'>Downloads</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
