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
    <nav
      className={`sticky top-0 ${
        isSticky
          ? "bg-white shadow-xs border-b-[1.5px] border-gray-300"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-5 py-4 flex justify-between items-center lg:rounded-lg 
        `}
      >
        <a href="#about">
          <h1 className="text-xl font-semibold tracking-tighter">Ujjwal</h1>
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-gray-600">
            Projects
          </a>
          <a
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
