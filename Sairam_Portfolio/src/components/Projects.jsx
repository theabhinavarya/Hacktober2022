import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Projects = () => {
  return (
    <section id='projects' className='py-10 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold '>
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
        <div className=' flex justify-center mt-12'>
          <div className='w-[30%] flex flex-wrap md:item-center justify-center'>
            <ul>
              <li className='relative flex gap-6 pb-5 items-baseline'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg xmlns='http://wwww.w3.org/2000/svg' width="12" height="12" className='bi bi-circle fill-gray-400'>
                    <circle cx="5" cy="5" r='10' />
                  </svg>
                </div>
                <div className='text-lg text-gray-400'>
                  <p className='text-3xl font-sans font-bold text-white'>DropCount - Reward based Water Efficiency Increaser</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>Mobile App made using Flutter, Firebase and Dart.
                </p>
                <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>A platform to monitor the water efficence usage in household.
                </p>
                <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>Fetch the data from the hardware device and gives meaningful stats to user
                </p>
                </div>
              </li>

              <li className='relative flex gap-6 pb-5 items-baseline'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg xmlns='http://wwww.w3.org/2000/svg' width="12" height="12" className='bi bi-circle fill-gray-400'>
                    <circle cx="5" cy="5" r='10' />
                  </svg>
                </div>
                <div className='text-lg text-gray-400'>
                  <p className='text-3xl font-sans font-bold text-white'>Covid - 19</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16'/>A website made with HTML, CSS, JavaScript and PHP</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16'/>A platform where we can check the covid-19 active cases in India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects