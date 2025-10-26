import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="lg:w-[56%] w-[97%] mx-auto mt-16 text-gray-600 p-10 flex items-center justify-center">
      <span className="flex items-center gap-1 lg:text-md text-sm">
        <LuCopyright />
        <p>Copyright 2025 by Ujjwal</p>
      </span>
    </div>
  );
};

export default Footer;
