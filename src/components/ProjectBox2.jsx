

const ProjectBox2 = ({img, title, desc, liveLink, githubLink}) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:gap-16 gap-10 md:p-10 p-6">
      <div className="">
        <img src={img} alt="" className="sm:max-w-82 max-w-54 rounded-2xl object-contain border-[1.5px] border-gray-300"/>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">{title}</h2>

        <p className="text-sm">{desc}</p>

        <div className="mt-6 flex sm:flex-row flex-col items-center gap-2 text-sm">
          <a 
            href={liveLink}
            className="w-full sm:w-fit px-6 py-2 bg-black text-white rounded-lg"
          >
            Try now
          </a>
          <a 
            href={githubLink}
            className=" w-full sm:w-fit px-6 py-2 bg-white rounded-lg border-[1.5px] border-gray-400"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox2