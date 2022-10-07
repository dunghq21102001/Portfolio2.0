import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BarLoader } from 'react-spinners'
function Experience() {
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
          <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <h1 class="text-3xl text-center font-bold text-white">Experience Timeline</h1>
            <div class="border-l-2 mt-10">
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div class="flex-auto">
                  <h1 class="text-lg">Project</h1>
                  <h1 class="text-xl font-bold">DFLEX WEBSITE</h1>
                  <h3>9/2022 - 11/2022</h3>
                  <p>• Brief: React application with logging and register new user, save favorite movie to your list.
                  </p>
                  <p>• Technology: React, Tailwind CSS, Movie API, Firebase.</p>
                  <p>• Roles/Main Tasks: Front-end developer.</p>
                  <p>• Contribute: Personal project.</p>
                  <p>• GitHub: https://github.com/dunghq21102001/DHQmovie.git</p>
                </div>
              </div>
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div class="flex-auto">
                  <h1 class="text-lg">Project</h1>
                  <h1 class="text-xl font-bold">DFLEX WEBSITE</h1>
                  <h3>9/2022 - 11/2022</h3>
                  <p>• Brief: React application with logging and register new user, save favorite movie to your list.
                  </p>
                  <p>• Technology: React, Tailwind CSS, Movie API, Firebase.</p>
                  <p>• Roles/Main Tasks: Front-end developer.</p>
                  <p>• Contribute: Personal project.</p>
                  <a href=''>• GitHub: https://github.com/dunghq21102001/DHQmovie.git</a>
                </div>
              </div>
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div class="flex-auto">
                  <h1 class="text-lg">Project</h1>
                  <h1 class="text-xl font-bold">DFLEX WEBSITE</h1>
                  <h3>9/2022 - 11/2022</h3>
                  <p>• Brief: React application with logging and register new user, save favorite movie to your list.
                  </p>
                  <p>• Technology: React, Tailwind CSS, Movie API, Firebase.</p>
                  <p>• Roles/Main Tasks: Front-end developer.</p>
                  <p>• Contribute: Personal project.</p>
                  <p>• GitHub: https://github.com/dunghq21102001/DHQmovie.git</p>
                </div>
              </div>
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div class="flex-auto">
                  <h1 class="text-lg">Project</h1>
                  <h1 class="text-xl font-bold">DFLEX WEBSITE</h1>
                  <h3>9/2022 - 11/2022</h3>
                  <p>• Brief: React application with logging and register new user, save favorite movie to your list.
                  </p>
                  <p>• Technology: React, Tailwind CSS, Movie API, Firebase.</p>
                  <p>• Roles/Main Tasks: Front-end developer.</p>
                  <p>• Contribute: Personal project.</p>
                  <p>• GitHub: https://github.com/dunghq21102001/DHQmovie.git</p>
                </div>
              </div>
              <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div class="flex-auto">
                  <h1 class="text-lg">Project</h1>
                  <h1 class="text-xl font-bold">DFLEX WEBSITE</h1>
                  <h3>9/2022 - 11/2022</h3>
                  <p>• Brief: React application with logging and register new user, save favorite movie to your list.
                  </p>
                  <p>• Technology: React, Tailwind CSS, Movie API, Firebase.</p>
                  <p>• Roles/Main Tasks: Front-end developer.</p>
                  <p>• Contribute: Personal project.</p>
                  <p>• GitHub: https://github.com/dunghq21102001/DHQmovie.git</p>
                </div>
              </div>
            </div>
          </div>
      }
    </motion.div>
  )
}

export default Experience