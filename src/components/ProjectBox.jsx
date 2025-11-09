

const ProjectBox = ({ img, title, desc, techStack, liveLink, githubLink }) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:gap-16 gap-5">

      <div className="">
        <img
          src={img}
          alt="project-image"
          className="sm:max-w-70 sm:h-50 h-40 max-w-64 rounded-2xl object-cover border-[1.5px] border-gray-300"
        />
      </div>

      <div className="max-w-[99%] flex flex-col gap-1.5">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm">{desc}</p>

        <div className="mt-2 flex gap-1 items-center text-gray-800 text-xs">
          {techStack.length > 0 && techStack.map((t) =>
            <p className="py-0.5 px-2.5 rounded-lg border-[1.5px] border-gray-300">
              {t}
            </p>)}
        </div>

        <div className="mt-4 flex flex-col items-center gap-1.5 text-sm">
          <a
            href={liveLink}
            target="_blank"
            className="w-full px-6 py-1 bg-black text-white rounded-lg border-[1.5px] border-gray-900 hover:bg-gray-800"
          >
            Try now
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="w-full px-6 py-1 bg-white rounded-lg border-[1.5px] border-gray-400 hover:bg-gray-100"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox