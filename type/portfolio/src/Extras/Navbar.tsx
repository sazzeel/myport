import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <Link to="/" className="text-white font-bold">Home</Link>
      <div className="flex">
        <Link to="/projects" className="text-white font-bold px-4">Projects</Link>
        <Link to="/about" className="text-white font-bold px-4">About Me</Link>
        <Link to="/contact" className="text-white font-bold px-4">Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar
