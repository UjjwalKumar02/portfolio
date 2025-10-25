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
      className={`sticky top-1.5 lg:w-[56%] flex justify-between items-center mx-auto py-3.5 rounded-xl px-10 ${
        isSticky
          ? "bg-white shadow-sm border-[1.5px] border-gray-400"
          : "bg-transparent"
      }`}
    >
      <h1 className="text-xl font-semibold">Ujjwal</h1>

      <div className="gap-10 text-sm font-medium text-gray-600 md:flex hidden">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>

      <a
        href="#contact"
        className="bg-black text-white px-4 py-1 rounded-xl text-sm"
      >
        Contact
      </a>
    </div>
  );
};

export default Nav;
