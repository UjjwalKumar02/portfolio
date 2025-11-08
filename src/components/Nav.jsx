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
      className={`sticky top-0 max-w-6xl mx-auto px-5 py-4 flex justify-between items-center lg:rounded-lg 
        ${isSticky
          ? "bg-white shadow-sm border-b-[1.5px] border-gray-300"
          : "bg-transparent"
        }`}
    >
      <a href="/">
        <h1 className="text-xl font-semibold tracking-tighter">Ujjwal</h1>
      </a>

      <div className="flex items-center gap-6 text-sm">
        <a href="#projects">Projects</a>
        <a
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Contact
        </a>
      </div>


    </nav>
  );
};

export default Nav;
