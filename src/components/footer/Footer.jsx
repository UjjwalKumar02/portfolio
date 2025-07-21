import React from 'react'

const Footer = () => {
  return (
    <section id='contact' className='md:w-[60%] w-[90%] md:py-10 py-8 px-4 text-[1.1rem] text-gray-600 mx-auto'>
      <div className='flex items-center justify-center font-medium gap-4'>
        <p className='pr-4 border-r-2 border-gray-500'>
          Ujjwal Kumar
        </p>
        <div className='flex gap-2'>
          <a href="mailto:ujjwal.kumar.id@gmail.com">Email</a>
          <a href="https://github.com/ujjwalkumar02">GitHub</a>
          <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Footer