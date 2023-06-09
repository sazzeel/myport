import React from 'react'
import { motion } from 'framer-motion'
// import Navbar from '../Extras/Navbar'

const About = () => {
    

  return (
    <div>
        {/* <Navbar/> */}
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      className="flex flex-col items-center justify-center 
      bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600
      h-screen"
      >
        
      <h1 className="text-3xl font-bold text-gray-800
      bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent
      ">About Me</h1>
      <p className="text-xl text-gray-700 mt-4">
        Hello, it is me Sajil Sharma, Age 22 born on 2057/06/17 B.S
        
      </p>
    </motion.div>
        </div>
  )
}

export default About
