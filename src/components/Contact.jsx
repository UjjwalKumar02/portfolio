import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:w-[60%] w-[97%] bg-white mx-auto md:py-16 py-10 px-10 rounded-xl shadow-sm border-[1.5px] border-gray-300 mt-28 space-y-10"
    >
      <h1 className="text-3xl font-medium text-center">Contact</h1>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        <a
          href="mailto:ujjwal.kumar.id@gmail.com"
          className="flex gap-1.5 items-center bg-black text-white px-7 py-1 rounded-xl"
        >
          <IoMdMail /> Mail
        </a>
        <a
          href="https://github.com/ujjwalkumar02"
          className="flex gap-1.5 items-center bg-black text-white px-7 py-1 rounded-xl"
          target="_blank"
        >
          <FaGithub /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
          className="flex gap-1.5 items-center bg-black text-white px-7 py-1 rounded-xl "
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="/Ujjwal_RESUME.pdf"
          className="flex gap-1.5 items-center bg-black text-white px-7 py-1 rounded-xl"
          target="_blank"
        >
          <TiDocumentText /> Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
