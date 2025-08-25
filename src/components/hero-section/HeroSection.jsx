import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-[100%] md:w-[50%] flex flex-col gap-10 px-6 md:px-14 py-10 mx-auto min-h-screen border-x border-gray-200'>
      <div>
        <h1 className='text-red-500 text-xl mb-4'>Ujjwal kumar</h1>
        <p>currently working as a student &#128575;</p>
      </div>

      <div>
        <h1 className='text-red-500 text-xl mb-3'>Projects</h1>
        <p>Authify - <a className='text-blue-500 underline' href="https://github.com/ujjwalkumar02/authify">github</a> <a className='text--500 underline' ></a></p>
        <p>MailSense - <a className='text-blue-500 underline' href="https://github.com/ujjwalkumar02/mailsense">github</a> <a className='text--500 underline' ></a></p>
      </div>

      <div>
        <h1 className='text-red-500 text-xl mb-3'>Technical Skills</h1>
        <div className='md:hidden block'>
          <img src="https://skillicons.dev/icons?i=next,react,typescript,javascript,nodejs" className='mb-2'/>
          <img src="https://skillicons.dev/icons?i=expressjs,mongodb,postgresql,prisma,tailwind" className='mb-2'/>
          <img src="https://skillicons.dev/icons?i=html,css,git,cpp,python" />
        </div>
        <div className='md:block hidden'>
          <img src="https://skillicons.dev/icons?i=next,react,typescript,javascript,nodejs,expressjs,mongodb,postgresql" className='mb-2'/>
          <img src="https://skillicons.dev/icons?i=prisma,tailwind,html,css,git,github,cpp,python" />
        </div>
      </div>

      <div>
        <h1 className='text-red-500 text-xl mb-3'>Education</h1>
        <p>BTech</p>
        <p>Maharaja Agrasen Institute of Technology</p>
        <p>2022 - present</p>
      </div>

      <div>
        <h1 className='text-red-500 text-xl mb-3'>Contact</h1>
        <div className='flex gap-3 flex-wrap'>
          <a className='text-blue-500 underline' href="mailto:ujjwal.kumar.id@gmail.com">Email</a>
          <a className='text-blue-500 underline'  href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">LinkedIn</a>
          <a className='text-blue-500 underline'  href="https://github.com/ujjwalkumar02">Github</a>
          <a className='text-blue-500 underline'  href="resume.pdf">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection























// import React, {useState} from 'react';
// import pfp from '/public/stars2.avif'
// import location from '/public/location.svg'
// import mail from '/public/mail.svg'
// import {motion} from 'framer-motion'


// // bg-white md:w-[60%] w-[87%] md:px-12 md:py-11 px-6 py-8 mx-auto md:text-[1.15rem] text-[1rem] text-gray-800 rounded-3xl border border-gray-300 shadow-xs

// // md:text-[1.15rem] text-[1rem]  flex items-center justify-center bg-white dark:bg-[#171717] dark:text-gray-300 mb-8

// const HeroSection = () => {
//   const [hasAnimated, setHasAnimated] = useState(false)


//   return (
//     <motion.section 
//     className='w-full'
//     initial={{opacity:0, y:50}}
//     whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
//     transition={{duration:0.5, ease:'easeOut'}}
//     viewport={{
//       amount:0.1, 
//       once:true,
//       onEnter: ()=>setHasAnimated(true),
//       onExit: ()=>setHasAnimated(false)
//     }}
//     >
//       {/* md:w-[60%] w-[87%] flex md:flex-row flex-col items-center justify-around md:gap-22 gap-9 mx-auto py-16 px-24 */}

//       <div 
//       className='md:w-[50%] md:text-[1.15rem] text-[0.9rem] mx-auto flex flex-col gap-16 border-x md:px-10 px-7 border-gray-200 py-25 h-screen'
//       >
//         <img src={pfp} alt="pfp" className='md:w-full md:h-52 w-full h-34 md:rounded-4xl rounded-2xl object-cover border border-[#f5f5f5] dark:border-gray-700' />

//         <div className='text-left px-2'>
//           <div className='w-full flex md:flex-row flex-col gap-3 justify-between'>
//             <div>
//               <p className='md:text-[1.6rem] text-[1.3rem] dark:text-[#f5f5f5]'>
//                 Ujjwal Kumar
//               </p>
//               <p className='text-[#004eff]'>Aspiring ML Engineer</p>
//             </div>

//             {/* <div className='md:flex hidden gap-[0.6rem] h-fit'>
//               <a href="https://github.com/ujjwalkumar02">
//                 <svg height="27" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="27" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
//                   <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#fff'></path>
//                 </svg>
//               </a>
//               <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" id="linkedin-bug-blue-xsmall" aria-hidden="true" role="none" data-supported-dps="21x21" width="26" height="26" focusable="false" className="windows-app-upsell__linkedin-bug-icon-svg lazy-loaded" aria-busy="false">
//                   <g>
//                     <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25A1.75 1.75 0 116.25 4.5 1.75 1.75 0 014.5 6.25zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.32 2.32 0 0011 12.91V18H8V8h3v1.39a4 4 0 013.3-1.63c1.77 0 3.66.93 3.66 4z" fill="#fff"></path>
//                   </g>
//                 </svg>
//               </a>
//             </div> */}
//           </div>

//           {/* <div className='mt-4'> */}
//             <span className='flex items-center justify-start mt-4'>
//               <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 26 24" width="19" fill="oklch(0.872 0.01 258.338)">
//                 <path d="M12 2C8.13 2 5 5.13 5 8.5c0 4.67 7 12.5 7 12.5s7-7.83 7-12.5c0-3.37-3.13-6.5-7-6.5zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7.5 12 7.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
//               </svg>
//               Delhi, India
//             </span>
            

//             {/* <span className='flex gap-[3px] items-center md:justify-start justify-center'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
//               ujjwal.kumar.id@gmail.com
//             </span> */}
//           {/* </div> */}

//           {/* <div className='mt-4 md:block hidden'>
//             <p>
//               Trying to learn new things and taking one thing at a time.
//             </p>
//           </div> */}

//           <p className='mt-8'>
//               Trying to read and stay awake.
//             </p>
//         </div>
        
//         <div className='flex items-center md:justify-start justify-between md:gap-7 gap-2 px-3 md:text-md text-sm'>

//             <a
//               href='https://www.linkedin.com/in/ujjwal-kumar-958ba6272' 
//               className='flex items-end gap-1 cursor-pointer'>
//               <svg xmlns="http://www.w3.org/2000/svg" height="26" width="27" viewBox="0 0 27 27" focusable="false" class="babybear:h-[26px] babybear:w-[26px] lazy-loaded" aria-busy="false">
//               <g fill="currentColor">
//                 <path d="M1.91 0h22.363a1.91 1.91 0 011.909 1.91v22.363a1.91 1.91 0 01-1.91 1.909H1.91A1.91 1.91 0 010 24.272V1.91A1.91 1.91 0 011.91 0zm1.908 22.364h3.818V9.818H3.818zM8.182 5.727a2.455 2.455 0 10-4.91 0 2.455 2.455 0 004.91 0zm2.182 4.091v12.546h3.818v-6.077c0-2.037.75-3.332 2.553-3.332 1.3 0 1.81 1.201 1.81 3.332v6.077h3.819v-6.93c0-3.74-.895-5.78-4.667-5.78-1.967 0-3.277.921-3.788 1.946V9.818z" fill="currentColor" fill-rule="evenodd"></path>
//               </g>
//               </svg>
//               LinkedIn
//             </a>

//             <a 
//               href='https://github.com/ujjwalkumar02'
//               className='flex items-end gap-1 cursor-pointer'
//               >
//               <svg height="27" aria-hidden="true" viewBox="0 0 21 22" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
//                 <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
//               </svg>
//               GitHub
//             </a>

            

//             <a 
//               href='mailto:ujjwal.kumar.id@gmail.com'
//               className='flex items-end gap-1 cursor-pointer'
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 23" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-8 h-7.5">
//               <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//               </svg>
//               Mail
//             </a>

//             {/* <span>
              
//             </span> */}
            

            
            
//             {/* <span> */}
//               {/* <svg height="34" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="34" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
//                 <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
//               </svg> */}
//             {/* </span> */}
//           </div>
//       </div>
      


//       {/* <div className='md:hidden flex gap-2 h-fit mt-8'>
//         <a href="https://github.com/ujjwalkumar02">
//           <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
//             <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z " fill='#000000'/>
//           </svg>
//         </a>
//         <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" id="linkedin-bug-blue-xsmall" aria-hidden="true" role="none" data-supported-dps="21x21" width="23" height="23" focusable="false" className="windows-app-upsell__linkedin-bug-icon-svg lazy-loaded" aria-busy="false">
//             <g>
//               <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25A1.75 1.75 0 116.25 4.5 1.75 1.75 0 014.5 6.25zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.32 2.32 0 0011 12.91V18H8V8h3v1.39a4 4 0 013.3-1.63c1.77 0 3.66.93 3.66 4z" fill="#000000"/>
//             </g>
//           </svg>
//         </a>
//       </div> */}


//       {/* <div className='mt-4 md:hidden block'>
//         <span className='flex gap-[1px] items-center'>
//           <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 24 24" width="19" fill="oklch(0.872 0.01 258.338)">
//             <path d="M12 2C8.13 2 5 5.13 5 8.5c0 4.67 7 12.5 7 12.5s7-7.83 7-12.5c0-3.37-3.13-6.5-7-6.5zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 7.5 12 7.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000000"/>
//           </svg>
//           Delhi, India
//         </span>
//         <span className='flex gap-[3px] items-center'>
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
//           ujjwal.kumar.id@gmail.com
//         </span>
//       </div> */}


//       {/* <div className='mt-4 md:hidden block'>
//         <p>
//         Trying to learn new things and taking one thing at a time.
//         </p>
//       </div> */}

//     </motion.section>
//   )
// }

// export default HeroSection






// // #171717
// // text-[#e5e5e5]
// // text-gray-800 border border-gray-400