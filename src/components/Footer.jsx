import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="lg:w-[56%] w-[97%] mx-auto mt-10 text-gray-600 p-10 flex items-center justify-center">
      <span className="flex items-center gap-1">
        <LuCopyright />
        <p>Copyright 2025 by Ujjwal</p>
      </span>
    </div>
  );
};

export default Footer;
