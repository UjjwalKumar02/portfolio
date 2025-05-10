import React from 'react'

const Nav = () => {
  return (
    <div className='md:w-[60%] w-[90%] mx-auto px-5 md:py-7 py-9'>
      <div className='flex md:gap-10 gap-4 justify-end text-[1.03rem]'>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Nav