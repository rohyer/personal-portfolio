import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerPosition, setHeaderPosition] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setHeaderPosition("shadow-lg");
      } else {
        setHeaderPosition("");
      }
    });
  }, []);

  return (
    <header className={`${headerPosition} fixed w-full bg-[#333646] z-20`}>
      <div className="flex items-center justify-between lg:container lg:mx-auto xl:px-64 lg:px-32 px-8 lg:h-24 h-16">
        <Link to="/">
          <FaCode className="text-4xl text-yellow-500" />
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li className="font-sans text-xl text-white">
              <a href="#sobre-mim">Sobre mim</a>
            </li>
            <li className="font-sans text-xl text-white">
              <a href="#portfolio">Portfólio</a>
            </li>
            <li className="font-sans text-xl text-white">
              <a href="#carreira">Carreira</a>
            </li>
            <li className="font-sans text-xl text-white">
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
