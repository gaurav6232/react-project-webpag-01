import { motion } from 'framer-motion'
import React from 'react'


const Marquee = () => {
  return (
    <div className='w-full py-5 whitespace-nowrap overflow-hidden flex mt-10'>
      <motion.div inatial={{x: "0"}}  animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 30}} className='line text-9xl font-ligth leading-none tracking-tightB'>
      Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
      </motion.div>
       
       
      <motion.div inatial={{x: "0"}}  animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 30}} className='line text-9xl font-ligth leading-none tracking-tightB'>
      Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
      </motion.div>
    </div>
  )
}

export default Marquee
