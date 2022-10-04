import React from 'react'
import { motion } from 'framer-motion'
function Experience() {
  return (
    <motion.div className='md:ml-[20%] md:mt[180px] h-[100vh]'
      initial={{ position: 'relative', top: '0' }}
      animate={{ translateY: '100px' }}
      transition={{ duration: 0.3 }}>
      <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 class="text-3xl text-center font-bold text-blue-500">Experience Timeline</h1>
        <div class="border-l-2 mt-10">
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-lg">Day 1</h1>
              <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
          </div>
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-lg">Day 1</h1>
              <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
          </div>
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-lg">Day 1</h1>
              <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
          </div>
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-lg">Day 1</h1>
              <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
          </div>
          <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>
            <div class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>
            <div class="flex-auto">
              <h1 class="text-lg">Day 1</h1>
              <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience