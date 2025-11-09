import { LuCopyright } from "react-icons/lu";
import pdf from "../../public/Ujjwal_RESUME.pdf"


const Footer = () => {
  return (
    <section
      id="contact" 
      className="bg-black text-white mt-12"
    >
      <footer className="max-w-4xl min-h-70 mx-auto md:px-10 px-12 flex justify-between items-center">
        <div className="space-y-2 text-sm">
          <p>
            Ujjwal kumar
          </p>
          <span className="flex gap-1 items-center">
            <LuCopyright /> Copyright 2025
          </span>
        </div>

        <div className="flex flex-col gap-2 items- text-sm">
          <a 
            href="https://www.linkedin.com/in/ujjwal-kumar-958ba6272"
            target="_blank"
            className="hover:text-blue-400"
          >Linkedin</a>
          <a 
            href="https://github.com/ujjwalkumar02"
            target="_blank"
            className="hover:text-blue-400"
          >Github</a>
          <a 
            href={pdf}
            target="_blank"
            className="hover:text-blue-400"
          >Resume</a>
          <a 
            href="mailto:ujjwal.kumar.id@gmail.com"
            className="hover:text-blue-400"
          >Mail</a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
