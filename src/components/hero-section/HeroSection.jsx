import React from 'react';
import pfp from '/public/pfp.jpg'
import location from '/public/location.svg'
import mail from '/public/mail.svg'

const HeroSection = () => {
  return (
    <section
      className='bg-white sm:w-[60%] w-[90%] sm:p-7 p-3 mx-auto border border-black text-[1rem]  text-gray-800 rounded-lg'
    >
      <div className='w-full flex gap-4'>
        <img src={pfp} alt="pfp" className='sm:w-29 sm:h-29 w-18 h-18 rounded-lg' />

        <div className='w-full'>
          <div className='w-full flex sm:flex-row flex-col gap-3 justify-between'>
            <div>
              <p className='font-semibold text-[1.25rem]'>
                Ujjwal Kumar
              </p>
              <p>ML Engineer</p>
            </div>

            <div className='flex sm:gap-2 gap-1'>
              <svg height="17" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="17" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z "></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" id="linkedin-bug-blue-xsmall" aria-hidden="true" role="none" data-supported-dps="21x21" width="17" height="17" focusable="false" className="windows-app-upsell__linkedin-bug-icon-svg lazy-loaded" aria-busy="false">
                <g>
                  <path d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25A1.75 1.75 0 116.25 4.5 1.75 1.75 0 014.5 6.25zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.32 2.32 0 0011 12.91V18H8V8h3v1.39a4 4 0 013.3-1.63c1.77 0 3.66.93 3.66 4z" fill="black"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className='mt-4 sm:block hidden'>
            <span className='flex gap-[2px]'>
              <img src={location} alt="" className='w-4' />
              Delhi, India
            </span>
            <span className='flex gap-[2px]'>
              <img src={mail} alt="" className='w-4' />
              kumarujjwaldos@gmail.com
            </span>
          </div>
        </div>

      </div>




      <div className='mt-4 sm:hidden block '>
        <span className='flex gap-[2px]'>
          <img src={location} alt="" className='w-3' />
          Delhi, India
        </span>
        <span className='flex gap-[2px]'>
          <img src={mail} alt="" className='w-3' />
          kumarujjwaldos@gmail.com
        </span>
      </div>


      <div className='mt-4'>
        <p>
          Learning new technologies and trying to contribute towards welfare of society.
        </p>
      </div>
    </section>
  )
}

export default HeroSection