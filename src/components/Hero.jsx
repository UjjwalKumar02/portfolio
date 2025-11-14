import img from "../../public/profile-pic4.jpeg";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="about"
      className="lg:max-w-4xl max-w-[91%] mx-auto bg-white lg:p-9 p-8 flex flex-col-reverse gap-10 sm:flex-row justify-between items-center rounded-3xl shadow-xs border-[1.5px] border-gray-300 mt-10"
    >
      <div className="md:max-w-[60%] md:space-y-4 space-y-2">
        <h2 className="lg:text-2xl text-xl font-medium md:text-left text-center">
          Ujjwal kumar
        </h2>

        <p className="md:text-left text-center lg:text-base text-sm">
          B.Tech student at MAIT, and Web developer.
        </p>

        <div className="md:max-w-[67%] flex gap-2 md:justify-start justify-center items-center mt-8 text-sm">
          <a
            href="mailto:ujjwal.kumar.id@gmail.com"
            className="w-full px-5 py-2 flex gap-1.5 justify-center items-center bg-black text-white rounded-lg hover:bg-gray-800"
          >
            <IoMdMail size={16} /> Mail
          </a>
          <a
            href="https://github.com/ujjwalkumar02"
            target="_blank"
            className="px-5 py-2 flex gap-1.5 justify-center items-center bg-white text-black rounded-lg border-[1.5px] border-gray-400 hover:bg-gray-100"
          >
            <FaGithub size={16} /> Github
          </a>
        </div>
      </div>

      <div className="">
        <img
          src={img}
          alt="profile-image"
          className="md:w-49 w-34 rounded-3xl object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
