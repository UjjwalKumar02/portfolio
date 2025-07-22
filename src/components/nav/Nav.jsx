import { useState } from "react"


const Nav = () => {
  const [menu, isMenu] = useState(false);
  const onClickMenu = () => {
    isMenu(!menu);
  }


  return (
    <div className='md:w-[60%] w-[95%] bg-white p-5 fixed left-1/2 top-0 transform -translate-x-1/2 border border-gray-300 rounded-xl shadow-lg mt-1'>
      <div className='flex justify-between items-center mx-auto'>
        <span 
          className='cursor-pointer'
          onClick={onClickMenu}
          >
            {!menu ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-6">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="size-6">
              <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
            )}
        </span>
        <span className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </span>
      </div>

      {menu && (
        <div className='flex flex-col gap-5 justify-center md:text-[1rem] text-[0.95rem] mt-6 text-gray-600'>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  )
}

export default Nav