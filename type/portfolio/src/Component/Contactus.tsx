import React from 'react'
// import Navbar from '../Extras/Navbar'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div >
        {/* <Navbar/> */}
        <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        exit={{ x: '100vw', opacity: 0 }}
        className="flex 
        flex-col
         items-center
          justify-center
           h-screen 
           bg-gradient-to-r
            from-gray-400 via-gray-600 to-blue-800"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-gray-800 "
        >
          Contact Me
        </motion.h1>
        {/* <div className='container mx-auto'> */}
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          
          animate={{ y: 0, opacity: 1 }}
          className="mt-4 w-3/4"
          >
          <form >
           < input
            type="text"
            placeholder="Name"
            // className="border border-gray-400 p-2 rounded-lg my-2"
            className="bg-white 
            focus:outline-none 
            focus:shadow-outline 
            border
            border-gray-300 
            rounded-lg 
            py-2 px-4 
            block
            w-full 
            appearance-none 
            leading-normal"
            />
          <input
            type="email"
            placeholder="Email"
            // className="border border-gray-400 p-2 rounded-lg my-2"
            className="bg-white 
            focus:outline-none 
            focus:shadow-outline 
            border
            border-gray-300 
            rounded-lg 
            py-2 px-4 
            block 
            w-full 
            appearance-none 
            leading-normal"
            />
          <textarea
            rows={5}
            placeholder="Message"
            // className="border border-gray-400 p-2 rounded-lg my-2"
            className="bg-white 
            focus:outline-none
            focus:shadow-outline 
            border
            border-gray-300 
            rounded-lg 
            py-2 px-4 
            block 
            w-full 
            appearance-none 
            leading-normal"
            />
          <button
            type="submit"
            className="bg-gray-800
            text-red-500
            p-2
            rounded-lg
            mt-5
            flex  items-center justify-center
            mx-80
            bg-gradient-to-r
            hover:from-gray-900 hover:via-gray-100 hover:to-gray-900
            "
            // hover:from-blue-500 hover:to-green-500
            // bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900
            // place-content-center
            d-flex
            items-center
            justify-center
            
            
            >
            Send
          </button>
          </form>
        </motion.form>
            {/* </div> */}
        </motion.div>
      
    </div>
  )
}

export default Contact
