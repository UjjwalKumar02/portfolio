import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectBox = ({ name, desc, img, stack1, stack2, live, github }) => {
  return (
    <div className="lg:w-[48%] w-[97%] bg-white p-8 rounded-xl border-[1.5px] border-gray-300 shadow-sm space-y-4 mt-8">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">{name}</p>

        <div className="flex items-center gap-3.5">
          <a href={github}>
            <FaGithub size={21} />
          </a>
          <a href={live}>
            <HiOutlineExternalLink size={21} />
          </a>
        </div>
      </div>
      <p className="text-gray-600 ">{desc}</p>

      <div>
        <img
          src={img}
          alt=""
          className="my-6 rounded-xl border-[1.5px] border-gray-300"
        />
      </div>

      <div className="flex gap-4 items-center">
        {stack1.map((s) => (
          <button
            key={s}
            className="px-4 py-1 text-sm rounded-xl w-full border-[1.5px] border-gray-400  text-gray-800"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {stack2.map((s) => (
          <button
            key={s}
            className="px-4 py-1 text-sm rounded-xl w-full border-[1.5px] border-gray-400 text-gray-800"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
