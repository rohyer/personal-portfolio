import { useState, useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ refLink1, refLink2, refLink3, refLink4 }) => {
  const [headerPosition, setHeaderPosition] = useState("");
  const [linkEffect, setLinkEffect] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false
  });

  const addBoxShadow = () => {
    if (window.scrollY >= 100) {
      setHeaderPosition("shadow-lg");
    } else {
      setHeaderPosition("");
    }
  };

  const changeLinks = () => {
    const section1 = refLink1.current;
    const section2 = refLink2.current;
    const section3 = refLink3.current;
    const section4 = refLink4.current;

    if (
      section1.getBoundingClientRect().top <= 96 &&
      section1.getBoundingClientRect().top >= -section1.offsetHeight + 97
    ) {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link1: true
      }));
    } else {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link1: false
      }));
    }

    if (
      section2.getBoundingClientRect().top <= 96 &&
      section2.getBoundingClientRect().top >= -section2.offsetHeight + 97
    ) {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link2: true
      }));
    } else {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link2: false
      }));
    }

    if (
      section3.getBoundingClientRect().top <= 96 &&
      section3.getBoundingClientRect().top >= -section3.offsetHeight + 97
    ) {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link3: true
      }));
    } else {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link3: false
      }));
    }

    if (
      section4.getBoundingClientRect().top <= 96 &&
      section4.getBoundingClientRect().top >= -section4.offsetHeight + 97
    ) {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link4: true
      }));
    } else {
      setLinkEffect((prevLinkEffect) => ({
        ...prevLinkEffect,
        link4: false
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addBoxShadow);
    window.addEventListener("scroll", changeLinks);

    return () => {
      window.removeEventListener("scroll", addBoxShadow);
      window.removeEventListener("scroll", changeLinks);
    };
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
              <a
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link1 ? "after:w-full" : ""
                }`}
                href="#sobre-mim"
              >
                Sobre mim
              </a>
            </li>
            <li className="font-sans text-xl text-white">
              <a
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link2 ? "after:w-full" : ""
                }`}
                href="#portfolio"
              >
                Portfólio
              </a>
            </li>
            <li className="font-sans text-xl text-white">
              <a
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link3 ? "after:w-full" : ""
                }`}
                href="#carreira"
              >
                Carreira
              </a>
            </li>
            <li className="font-sans text-xl text-white">
              <a
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link4 ? "after:w-full" : ""
                }`}
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
