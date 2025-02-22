import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'

const Header = () => {
  let [time, setTime] = useState(format(new Date(), 'HH:mm'))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(format(new Date(), 'HH:mm'))
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='text-right px-1 py-3 text-[#e76231]'>
      {time}
    </div>
  )
}

export default Header