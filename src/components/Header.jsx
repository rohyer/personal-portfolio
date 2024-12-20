import { useState, useEffect, useRef } from "react";
import { FaCode } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = ({ refLink1, refLink2, refLink3, refLink4 }) => {
  const [nav, setNav] = useState(false);
  const [headerPosition, setHeaderPosition] = useState("");
  const [linkEffect, setLinkEffect] = useState({
    link1: false,
    link2: false,
    link3: false,
    link4: false
  });

  const toggleMobileNav = () => {
    if (window.innerWidth <= 767) {
      setNav(!nav);
      if (!nav) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  };

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
      section1 &&
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
      section2 &&
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
      section3 &&
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
      section4 &&
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

        <nav
          className={`fixed top-0 left-0 w-full h-full bg-[#000000bb] backdrop-blur-md duration-200 md:relative md:w-auto md:h-auto md:flex md:bg-transparent md:visible md:opacity-100  ${
            !nav && "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col h-full justify-center text-center md:flex-row md:h-auto gap-6">
            <li className="font-sans text-xl text-white">
              <Link
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link1 ? "after:w-full" : ""
                }`}
                to="/#sobre-mim"
                onClick={toggleMobileNav}
              >
                Sobre mim
              </Link>
            </li>
            <li className="font-sans text-xl text-white">
              <Link
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link2 ? "after:w-full" : ""
                }`}
                to="/#portfolio"
                onClick={toggleMobileNav}
              >
                Portfólio
              </Link>
            </li>
            <li className="font-sans text-xl text-white">
              <Link
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link3 ? "after:w-full" : ""
                }`}
                to="/#carreira"
                onClick={toggleMobileNav}
              >
                Carreira
              </Link>
            </li>
            <li className="font-sans text-xl text-white">
              <Link
                className={`relative py-2 after:content[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-yellow-500 after:w-0 after:h-1 after:duration-200 after:rounded-sm hover:after:w-full ${
                  linkEffect.link4 ? "after:w-full" : ""
                }`}
                to="/#contato"
                onClick={toggleMobileNav}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div onClick={toggleMobileNav} className="flex z-20 md:hidden">
          {nav ? (
            <MdClose className="text-4xl text-white" />
          ) : (
            <MdMenu className="text-4xl text-white" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
