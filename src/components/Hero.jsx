import img from "../../public/profile-pic2.jpeg";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div
      id="about"
      className="lg:w-[60%] w-[97%] bg-white mx-auto flex justify-between items-center p-10 rounded-xl shadow-sm border-[1.5px] border-gray-300 mt-10"
    >
      <div className="md:max-w-[60%] space-y-4">
        <p className="text-2xl font-medium md:text-left text-center">
          Ujjwal kumar
        </p>
        <p className="text-gray-600 md:text-left">
          Final year B.Tech student at MAIT, Delhi, and Aspiring Software
          developer.
        </p>

        <div className="flex gap-2 md:justify-start justify-center items-center mt-6 text-sm">
          <a
            href="mailto:ujjwal.kumar.id@gmail.com"
            className="flex gap-1.5 items-center bg-black text-white px-5 py-1 rounded-xl"
          >
            <IoMdMail /> Mail
          </a>
          <a
            href="https://github.com/ujjwalkumar02"
            className="flex gap-1.5 items-center bg-black text-white px-5 py-1 rounded-xl"
            target="_blank"
          >
            <FaGithub /> Github
          </a>
        </div>
      </div>

      <div className="md:block hidden">
        <img src={img} alt="" className="w-60 rounded-xl " />
      </div>
    </div>
  );
};

export default Hero;
