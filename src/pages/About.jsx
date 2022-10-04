import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <motion.div className='md:ml-[20%] md:mt[180px]  h-[100vh]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:ml-[20px] w-full md:w-[50%]'>
          <h1 className='text-[40px] md:text-[50px]'>About</h1>
          <p className='w-full md:leading-8 mb-4'>
            I am a Front-end developer from Ho Chi Minh City, I have great passion and am extremely serious about my job. Missing deadlines doesn't exist in my "dictionary"
          </p>
          <p className='w-full md:leading-8'>I am confident with my ability to work well in groups, and can also work individually. Live independently, enjoy learning Korean and listening to music.</p>
        </div>
        <div className='w-full md:w-[50%]'>
          <img className='w-full' src='https://www.techbabble.zone/content/images/2021/07/46207-programmer-1.gif' alt='gif-for-dev' />
        </div>
      </div>
    </motion.div>
  )
}

export default About