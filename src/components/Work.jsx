import React from 'react'
import project1 from '../assets/proj1.png'
import project2 from '../assets/proj2.png'
import project3 from '../assets/proj3.png'
import project4 from '../assets/proj4.png'
import project5 from '../assets/proj5.png'
import project6 from '../assets/proj6.png'









const Work = () => {
  return(
      <div className='max-w-[1200px] mx-auto p-5' id='work'>
          <div className='pb-8'>
              <p className='text-4xl mb-3 font-bold primary-color'>Works</p>
              <p className='text-gray-400'>Check out some of my recent work</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project1} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='https://smjkr.github.io/vidTube/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project2} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='https://smjkr.github.io/socialbook/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project3} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div>
              <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project4} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='https://smjkr.github.io/bank/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div><div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project5} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='https://smjkr.github.io/loginForm1/'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div><div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
              shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                  <img src={project6} alt='Project one'/>
                  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
                  justify-center items-center'>
                      <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                      <div className='pt-8 text-center'>
                          <a href='https://github.com/smjkr/Calculator-useing-React-js'>
                              <button className='text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg'>
                                  Live
                              </button>
                          </a>
                      </div>
                  </div>
              </div>

          </div>

      </div>
  )
}
export default Work;