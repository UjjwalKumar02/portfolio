import React from 'react'
import {motion} from 'framer-motion'


const ProjectCard = ({ projectName, desc, pfp, github, live }) => {
  return (
    <div 
    className='bg-[] w-[97%] text-gray-800 h-fit border border-gray-300 p-8 
    md:py-11 md:px-10 shadow-xs text-[0.95rem] md:text-[1.1rem] rounded-md'
    >
      <div className='flex md:flex-row flex-col items-center md:gap-16 gap-5'>

        <img src={pfp} alt="project-image" className='md:w-46 md:h-46 w-full h-38 object-cover rounded-md border border-gray-200'/>

        <div className=''>
          <p className='font-semibold md:text-[1.35rem] text-[1.2rem] '>{projectName}</p>
          
          <p className='mt-3'>{desc}</p>

          <div className='flex flex-wrap gap-2 mt-6'>
            <span>
              <a 
              href={github} 
              className='flex gap-2 items-center justify-center md:px-6 px-5 py-1.5 bg-black text-white rounded-md cursor-pointer text-[1rem]'
              >
                <svg height="21" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="21" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#fff'></path>
               </svg>
                GitHub
              </a>
            </span>
            <span>
              {/* <a 
              href={live}
              className='flex gap-1 items-center justify-center md:px-5 px-3 py-1 bg-black text-white rounded-lg cursor-pointer md:text-[1rem] text-[0.8rem]'
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                aria-hidden="true"
                focusable="false"
                style={{ fill: 'currentColor', height: '24px', width: '24px', transform: 'rotate(-55deg)' }}
                >
                <path d="m17.086 11.5-5.043-5.04 1.414-1.42 7.457 7.46-7.457 7.46-1.414-1.42 5.043-5.04H3.5v-2z" fill='#fff'></path>
                </svg>
                Live Demo
              </a> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard



{/* <div className='w-full flex justify-between'>
        <p className='font-semibold'>{projectName}</p>

        <div className='flex gap-1 items-center'>
          <a href="">
            <svg height="21" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="21" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#000000'></path>
            </svg>
          </a>
          <a href="">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              aria-hidden="true"
              focusable="false"
              style={{ fill: 'currentColor', height: '25px', width: '25px', transform: 'rotate(-55deg)' }}
            >
              <path d="m17.086 11.5-5.043-5.04 1.414-1.42 7.457 7.46-7.457 7.46-1.414-1.42 5.043-5.04H3.5v-2z" fill='#000000'></path>
            </svg>

          </a>
        </div>
      </div>
      <div className='mt-4'>
        <p>{desc}</p>
      </div>
      <div className='flex flex-wrap gap-2 mt-4'>
        <span className='bg-[#e76231] text-gray-300 px-5 py-1 border border-gray-200 rounded-lg'>Wait</span>
        <span className='bg-[#e5e5e5] text-gray-800 px-5 py-1 border border-gray-200 rounded-lg'>for</span>
        <span className='bg-[#e5e5e5] text-gray-800 px-5 py-1 border border-gray-200 rounded-lg'>it</span>
        <span className='bg-[#e5e5e5] text-gray-800 px-5 py-1 border border-gray-200 rounded-lg'>&#x1F60A;
        </span>
      </div> */}


    //    whileHover={{
    //   scale:1.03,
    //   boxShadow:"0px 4px 15px rgba(0, 0, 0, 0.15)",
    //   y:-5
    // }}
    // initial={{scale:1}}
    // transition={{duration:0.3}}