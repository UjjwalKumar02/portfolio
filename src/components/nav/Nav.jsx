import { useEffect, useState } from "react"


const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const onClickMenu = () => {
    setMenu(!menu);
  }

  const onClickTheme = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [isDark])


  return (
    <div className='w-full p-6 md:px-10 fixed left-1/2 top-0 transform -translate-x-1/2 border-b border-gray-300 bg-[#f5f5f5] dark:bg-[#171717] dark:border-gray-700 shadow-xs'>
      <div className='flex justify-between items-center mx-auto'>
        <span 
          className='cursor-pointer'
          onClick={onClickMenu}
          >
            {!menu ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 dark:text-[#a3a3a3]">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>

            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 dark:text-[#a3a3a3]">
              <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
            </svg>
            )}
        </span>
        <span 
          className='cursor-pointer'
          onClick={onClickTheme}
        >
          {!isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#fe6a34]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 dark:text-[#fe6a34]">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
            </svg>

          )}
          
        </span>
      </div>

      {menu && (
        <div className='flex flex-col gap-5 justify-center md:text-[1rem] text-[0.95rem] mt-6 text-black dark:text-[#a3a3a3]'>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  )
}

export default Nav