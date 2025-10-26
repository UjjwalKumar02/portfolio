import img from "../../public/profile-pic4.jpeg";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <div
      id="about"
      className="lg:w-[60%] w-[92%] bg-white mx-auto flex justify-between items-center lg:p-10 p-8 rounded-xl shadow-sm border-[1.5px] border-gray-300 mt-10"
    >
      <div className="md:max-w-[66%] space-y-5">
        <p className="lg:text-2xl text-xl font-medium md:text-left text-center">
          Ujjwal kumar
        </p>
        <p className="text-gray-700 lg:text-left text-center lg:text-[0.91rem] text-sm">
          Final year B.Tech student at MAIT, Delhi, and Aspiring Software
          developer.
        </p>

        <div className="flex gap-2 md:justify-start justify-center items-center lg:mt-6 mt-8 text-sm">
          <a
            href="mailto:ujjwal.kumar.id@gmail.com"
            className="flex gap-1.5 items-center bg-black text-white px-5 py-[5.1px] rounded-xl "
          >
            <IoMdMail size={16}/> Mail
          </a>
          <a
            href="https://github.com/ujjwalkumar02"
            className="flex gap-1.5 items-center bg-black text-white px-5 py-[5px] rounded-xl"
            target="_blank"
          >
            <FaGithub size={16}/> Github
          </a>
        </div>
      </div>

      <div className="md:block hidden">
        <img src={img} alt="" className="w-49 rounded-xl " />
      </div>
    </div>
  );
};

export default Hero;
