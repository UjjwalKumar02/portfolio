import { useEffect, useState } from "react";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky lg:top-1 top-0 lg:w-[57%] flex justify-between items-center mx-auto lg:py-3.5 lg:rounded-xl lg:px-10 px-5.5 py-5.5 ${
        isSticky
          ? "bg-white shadow-sm lg:border-[1.5px] border-b-[1.5px] lg:border-gray-400 border-gray-300"
          : "bg-transparent"
      }`}
    >
      <a href="#about" className="text-xl font-semibold">Ujjwal</a>

      <div className="gap-10 text-sm font-medium text-gray-600 md:flex hidden items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>

      <a
        href="#contact"
        className="bg-black text-white px-4 py-[5px] rounded-xl text-sm"
      >
        Contact
      </a>
    </div>
  );
};

export default Nav;
