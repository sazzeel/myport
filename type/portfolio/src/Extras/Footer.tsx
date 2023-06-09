import { motion} from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <motion.footer
        className='bg-gray-900 text-white p-4 flex items-center justify-between'
        initial= {{y: 100, opacity:0}}
        animate = {{y:0, opacity:1}}
        >
         <div className='text-sm'>
            &copy; {new Date().getFullYear()} Sajil Sharma
         </div>
         <div className='flex'>
            <a href="#"
            className='text-sm hover:text-gray-400 mr-4'>
                Privacy Policy
            </a>
            <a
          href="#"
          className="text-sm hover:text-gray-400"
        >
          Terms of Service
        </a>
         </div>
             

        </motion.footer>
      
    </div>
  )
}

export default Footer
