import React from 'react'

const Footer = () => {
  return (
    <section 
    id='contact' 
    className='fixed bottom-0 w-full border-t border-gray-200 bg-white md:text-[0.9rem] text-[0.8rem]'
    >
      <div className=' md:w-[50%] mx-auto p-4 border-x border-gray-200'>
        <div className='flex items-center justify-center gap-4'>
          {/* <p className='pr-4 border-r-2 border-[#a3a3a3]'>
            Ujjwal Kumar
          </p>
          <div className='flex gap-4'>
            <a href="mailto:ujjwal.kumar.id@gmail.com">Email</a>
            <a href="https://github.com/ujjwalkumar02">GitHub</a>
            <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">LinkedIn</a>
          </div> */}
          <p>
            &#9829; Thanks for stopping by!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer