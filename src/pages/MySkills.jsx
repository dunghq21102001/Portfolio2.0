import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BarLoader } from 'react-spinners'
function MySkills() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <motion.div className='md:ml-[20%] md:mt[180px] h-[100vh]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      {
        loading ?
          <BarLoader
            color="#36d7b7"
            height={15}
            className='mt-[50%] md:mt-[25%] lg:mt-[20%] ml-[50%] translate-x-[-50%] translate-y-[-50%]'
            width={200}
            loading={loading}
          />
          :
          <div>
            <h1>My skills</h1>

          </div>
      }
    </motion.div>
  )
}

export default MySkills