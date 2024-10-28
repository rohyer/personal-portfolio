import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#333646]">
      <div className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-12">
        <Link to="/" className="flex justify-center mb-2">
          <FaCode className="text-4xl text-yellow-500" />
        </Link>

        <h6 className="font-sans text-white text-xl text-center mb-6">
          Obrigado pela visita
        </h6>

        <div className="flex justify-center gap-4">
          <a
            className="font-montserrat text-white"
            href="mailto:guilhermerl.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-white text-xl" />
          </a>
          <a
            className="font-montserrat text-white"
            href="https://api.whatsapp.com/send?phone=5584981056717&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Guilherme."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
          <a
            className="font-montserrat text-white"
            href="https://www.linkedin.com/in/guilhermerdeoliveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            className="font-montserrat text-white"
            href="https://github.com/rohyer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
