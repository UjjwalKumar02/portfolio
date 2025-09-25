import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"
import { PiLineVertical } from "react-icons/pi";

const Hero = ({ onHomeClick, onProjectClick, onAboutClick }) => {
  return (
    <div className='px-4 py-6 flex lg:flex-row flex-col justify-between items-center gap-4'>
      <div className='flex gap-1 items-center'>
        <button className='text-3xl font-medium cursor-pointer hover:underline' onClick={onHomeClick}>
          ujjwal
        </button>

        <PiLineVertical size={28}/>

        <div className='flex gap-2 items-center'>
              <a href="https://github.com/ujjwalkumar02">
                <FaGithub size={25} />
              </a>
              <a href="mailto:ujjwal.kumar.id@gmail.com">
                <MdMailOutline size={30} />
              </a>
              {/* <a href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272">
                <FaLinkedin size={24} />
              </a> */}
        
              {/* <a href="">
                  <IoMdDocument size={28}/>
                </a> */}
            </div>
      </div>

      <div className='flex gap-1 font-medium items-center'>
        <button onClick={onProjectClick} className='cursor-pointer hover:underline'>
          projects
        </button>
        <PiLineVertical />
        <button onClick={onAboutClick} className='cursor-pointer hover:underline'>
          skills
        </button>
      </div>
    </div>
  )
}

export default Hero