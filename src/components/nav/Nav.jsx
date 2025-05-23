import React from 'react'

const Nav = () => {
  return (
    <div className='w-full bg-white mx-auto py-6 fixed top-0 border-b border-b-gray-300'>
      <div className='flex md:gap-10 gap-4 justify-center md:text-[1rem] text-[0.95rem]'>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Nav