import img from "../../../public/profilePic5.jpeg"

const Home = () => {
  return (
    <div className='px-6 mt-5 space-y-4 text-gray-900'>
      <p >
        {/* Hello, I'm <span className='font-medium italic text-black'>Software Engineer</span> based in India.  Currently in the final year of my B.Tech at MAIT, Delhi.
      
       

         I have got strong interest in software technologies, particularly in 
        <span className='font-medium italic texxt-black'> web development </span>
        and 
        <span className='font-medium italic text-black'> machine learning.</span>
        Although I don't have formal work experience yet, I've actively worked on several personal and academic projects. */}
        Hi, I'm a 
        <span className='font-medium  text-black'> Software Engineer </span>
        from India, currently in my final year of B.Tech at MAIT, Delhi. 
      </p>
      <p>
        I have a strong interest in 
        <span className='font-medium  text-black'> web development </span>
        and
      <span className='font-medium  text-black'> machine learning. </span>
        While I don't have formal work experience yet, I've built several personal and academic projects.
      </p>
      <div className='mt-9'>
        <img src={img} alt="" className='rounded' />
      </div>
    </div>
  )
}

export default Home