import { motion } from 'framer-motion'
import React from 'react'
// import Navbar from '../Extras/Navbar'

interface ProjectProps {
  title: string
  description: string
  image: string
}
const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
    return(
    <div className='bg-gradient-to-b from-gray-900 to-gray-600'>
        
        {/* page animation */}
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: '100vw', opacity: 0 }}
        >
          {/* Description area animation */}
        <motion.div
        className = "relative m-5 p-5 overflow-hidden bg-green-200 rounded-lg shadow-lg"
        whileHover={{scale:1.05}}
        whileTap = {{scale: 0.95}}
        >
          <img 
          className = "w-full h-48 object-cover object-center"
          src = {image}
          alt = "Image"
          />
          <div className='px-6 py-4'>
            <motion.h2
            initial = {{y: -30, opacity: 0}}
            animate={{y:0, opacity:1}}
            className = "text-xl font-medium text-gray-800"
            >
              {title}
            </motion.h2>
            <p className='text-gray-600 text-base mt-2'>
              {description}
              this is the project done by me......here is the url for the github where u can find the project
            </p>
          </div>
          </motion.div>

          {/* another area */}
          <motion.div
        className = "relative m-5 p-5 overflow-hidden bg-purple-400 rounded-lg shadow-lg"
        whileHover={{scale:1.05}}
        whileTap = {{scale: 0.95}}
        >

          <img 
          className = "w-full h-48 object-cover object-center"
          src = {image}
          alt = "Image"
          />
          <div className='px-6 py-4'>
            <motion.h2
            initial = {{y: -30, opacity: 0}}
            animate={{y:0, opacity:1}}
            className = "text-xl font-medium text-gray-800"
            >
              {title}
            </motion.h2>
            <p className='text-gray-600 text-base mt-2'>
              {description}
              this is the project done by me......here is the url for the github where u can find the project
            </p>
          </div>
            </motion.div>

        </motion.div>
      
    </div>
  )
}

export default Project
