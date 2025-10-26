import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import pdf from "../../public/Ujjwal_RESUME.pdf"

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:w-[60%] w-[97%]  mx-auto md:py-12 py-10 lg:px-10 px-3 mt-24 space-y-8"
    >
      <h1 className="lg:text-2xl text-xl font-medium text-center">Contact</h1>

      <div className="flex flex-wrap items-center justify-center lg:gap-5 gap-1">
        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          className="flex gap-1.5 items-center bg-white lg:px-7 px-4 py-2 rounded-xl border-[1.5px] border-gray-300 shadow-sm"
        >
          <IoMdMail /> Mail
        </a>
        <a
          href="https://github.com/ujjwalkumar02"
          className="flex gap-1.5 items-center bg-white lg:px-7 px-4 py-2 rounded-xl border-[1.5px] border-gray-300 shadow-sm"
          target="_blank"
        >
          <FaGithub /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          className="flex gap-1.5 items-center bg-white lg:px-7 px-4 py-2 rounded-xl border-[1.5px] border-gray-300 shadow-sm"
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href={pdf}
          className="flex gap-1.5 items-center bg-white lg:px-7 px-4 py-2 rounded-xl border-[1.5px] border-gray-300 shadow-sm"
          target="_blank"
        >
          <TiDocumentText /> Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
