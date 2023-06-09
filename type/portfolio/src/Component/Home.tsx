

import React, { useState } from 'react'
// import Navbar from '../Extras/Navbar'
import { 
  motion, 
  AnimatePresence 
} 
from 'framer-motion'

const Home = () => {
  const [selectedId, setSelectedId] = useState(null)

  // const items = [
  //   {
  //     id: 1,
  //     title: 'Item 1',
  //     subtitle: 'Subtitle 1'
  //   },
  //   {
  //     id: 2,
  //     title: 'Item 2',
  //     subtitle: 'Subtitle 2'
  //   },
  //   {
  //     id: 3,
  //     title: 'Item 3',
  //     subtitle: 'Subtitle 3'
  //   }
  // ]

  return (
    <div>
      

        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: '100vw', opacity: 0 }}
        >
          <div className="flex flex-col 
          items-center 
          justify-center
           h-screen 
           bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-bold text-gray-800"
            >
              <h1 className="text-7xl 
              font-bold
              
              
               bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent
               flex items-center justify-center
               absolute inset-x-64 top-20"
               >
                Welcome to My Portfolio
                </h1>
            </motion.h1>
  
            <motion.p 
            transition={{
              delay: 5,
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            className="text-xl text-sky-400/100">I'm a Developer</motion.p>
            {/* <motion.div layout style={{ borderRadius: 20 }} />
   */}
   
          </div>
        </motion.div>
    </div>
  )
}

export default Home

