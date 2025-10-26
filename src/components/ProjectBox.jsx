import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RxExternalLink } from "react-icons/rx";

const ProjectBox = ({ name, desc, img, stack1, stack2, live, github }) => {
  return (
    <div className="lg:w-[40%] w-[94%] bg-white lg:p-9 p-7.5 rounded-xl border-[1.5px] border-gray-300 shadow-sm space-y-5 mt-8">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">{name}</p>

        <div className="flex items-center gap-3.5">
          <a href={github}>
            <FaGithub size={22} />
          </a>
          <a href={live}>
            <RxExternalLink size={22} />
          </a>
        </div>
      </div>
      <p className="text-gray-600 lg:text-md text-sm">{desc}</p>

      <div>
        <img
          src={img}
          alt=""
          className="my-6 rounded-xl border-[1.5px] border-gray-300"
        />
      </div>

      <div className="space-y-3">
        <div className="flex lg:gap-3 gap-1.5 items-center">
        {stack1.map((s) => (
          <button
            key={s}
            className="px-4 py-1 rounded-xl w-full border-[1.5px] border-gray-400  text-gray-800 lg:text-sm text-xs"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="flex lg:gap-3 gap-1.5 items-center">
        {stack2.map((s) => (
          <button
            key={s}
            className="px-4 py-1 lg:text-sm text-xs rounded-xl w-full border-[1.5px] border-gray-400 text-gray-800"
          >
            {s}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProjectBox;
