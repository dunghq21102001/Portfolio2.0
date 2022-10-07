import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BarLoader } from 'react-spinners'
function Contact() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <motion.div className='md:ml-[20%] md:mt[180px]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      {loading ?
        <BarLoader
          color="#36d7b7"
          height={15}
          className='mt-[50%] md:mt-[25%] lg:mt-[20%] ml-[50%] translate-x-[-50%] translate-y-[-50%]'
          width={200}
          loading={loading}
        />
        :
        <div className='w-full flex justify-between px-[20px]'>
          <div className='w-full md:w-[48%]'>
            <h1 className='md:pl-[20px] text-center text-3xl md:text-5xl text-blue-300 md:text-left'>Contact me</h1>
            <p className='hidden md:block text-center md:text-left md:ml-[20px] py-5'>I hope can get a job.I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            <form className='w-full flex flex-col items-center justify-between'>
              <div className='w-full flex justify-between'>
                <input className='bg-[#2b2b2b] outline-none pl-3 w-[48%] mb-4 py-5 text-xl text-[#08fdd8]' type='text' placeholder='Name' />
                <input className='bg-[#2b2b2b] outline-none pl-3 w-[48%] mb-4 py-5 text-xl text-[#08fdd8]' type='email' placeholder='Email' />
              </div>
              <input className='bg-[#2b2b2b] outline-none pl-3 w-[100%] mb-4 py-5 text-xl text-[#08fdd8]' type='text' placeholder='Subject' />
              <textarea className='bg-[#2b2b2b] outline-none pl-3 w-[100%] h-[150px] mb-4 py-5 text-xl text-[#08fdd8]' type='text' aria-label='2' placeholder='Message' />
              <button className='w-[50%] md:w-[40%] border border-[#08fdd8] text-[#08fdd8] py-2 hover:bg-[#08fdd8] hover:text-black cursor-pointer'>
                Send message!
              </button>
            </form>
          </div>
          <div className='hidden md:block w-[48%]'>
            <img className='w-full' src='https://www.google.com/maps/d/thumbnail?mid=144C9lxDNDpwhLOcm0qcr_AkBaRk&hl=fr' alt='' />
          </div>
        </div>
      }

    </motion.div>
  )
}

export default Contact