import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'
function Home() {
  return (
    <motion.div className='md:ml-[20%] w-full md:w-[80%] md:mt[180px]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      <h1 className='text-2xl md:text-[80px] ml-3'>Hi, I'm</h1>
      <h1 className='container-ledRun ml-[20px]'>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>D</span>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>u</span>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>n</span>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>g</span>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>H</span>
        <span className='animationLEDRUN text-white text-5xl md:text-[140px] '>Q</span>
      </h1>
      <div className='relative w-full h-[100px] mt-4'>
        <h2 className='absolute pl-[20px] md:text-[40px] lg:text-[55px] text-white font-bold '>FRONT-END
          INTERNSHIP</h2>
        <h2 className='absolute pl-[20px] md:text-[40px] lg:text-[55px] text-white waterAnimation font-bold '>FRONT-END
          INTERNSHIP</h2>
      </div>
      <div className='w-full flex justify-between'>
        <div className='w-full md:w-[50%] md:pl-[20px]'>
          <h1 className='text-center text-3xl md:text-5xl text-blue-300 md:text-left'>About me</h1>
          <p className='text-center md:text-left'>
            Actively in learning, full of ambition to develop in a career, always accomplish the task given above the desired level.
          </p>
          <p className='text-center md:text-left'>Loves Korean language and culture.</p>
        </div>
        <div className='hidden w-[50%] md:block'>
          
        </div>
      </div>
      <div className='w-full mt-[30px]'>
        <h1 className='md:pl-[20px] text-center text-3xl md:text-5xl text-blue-300 md:text-left'>My portfolio</h1>
        <p className='text-center my-2'>A small gallery of recent projects chosen by me.</p>
        <ul className='w-full flex justify-around flex-wrap'>
          {portfolioData.map((d) => (
            <li key={d.id} className='w-[40%] md:w-[25%] mb-4 mx-1 overflow-hidden cursor-pointer'>
              <img className='w-[100%] md:hover:scale-110 ease-linear duration-100' src={d.src} alt='' />
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full flex justify-between px-[20px] bg-[#1d1d1d] pb-3'>
        <div className='w-full md:w-[48%]'>
          <h1 className='md:pl-[20px] text-center text-3xl md:text-5xl text-blue-300 md:text-left'>Contact me</h1>
          <p className='text-center md:text-left md:ml-[20px] py-5'>I hope can get a job.I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
          <form className='w-full flex flex-col items-center justify-between'>
            <div className='w-full flex justify-between'>
              <input className='bg-[#2b2b2b] outline-none pl-3 w-[48%] mb-4 py-2' type='text' placeholder='Name' />
              <input className='bg-[#2b2b2b] outline-none pl-3 w-[48%] mb-4 py-2' type='text' placeholder='Email' />
            </div>
            <input className='bg-[#2b2b2b] outline-none pl-3 w-[100%] mb-4 py-2' type='text' placeholder='Subject' />
            <textarea className='bg-[#2b2b2b] outline-none pl-3 w-[100%] mb-4 py-2' type='text' multiple placeholder='Message' />
            <button className='w-[50%] md:w-[40%] border border-[#08fdd8] text-[#08fdd8] py-2 hover:bg-[#08fdd8] hover:text-black cursor-pointer'>
              Send message!
            </button>
          </form>
        </div>
        <div className='hidden md:block w-[48%]'>
          <img className='w-full' src='https://www.google.com/maps/d/thumbnail?mid=144C9lxDNDpwhLOcm0qcr_AkBaRk&hl=fr' alt='' />
        </div>
      </div>
    </motion.div>
  )
}

export default Home