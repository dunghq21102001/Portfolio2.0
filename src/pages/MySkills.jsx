import React from 'react'
import { motion } from 'framer-motion'
function MySkills() {
  return (
    <motion.div className='md:ml-[20%] md:mt[180px] h-[100vh]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      <div>
        <h1>My skills</h1>
       
      </div>
    </motion.div>
  )
}

export default MySkills