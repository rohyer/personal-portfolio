import { FaBolt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="bg-[#333646]">
      <div className="flex justify-between gap-8 lg:container lg:mx-auto xl:px-64 lg:px-32 px-8 py-32">
        <div>
          <p className="font-montserrat font-semibold text-2xl text-yellow-500">
            Prazer, me chamo
          </p>
          <h1 className="relative font-montserrat font-semibold text-7xl text-white mb-16 before:block before:absolute before:h-2 before:w-20 before:bg-yellow-500 before:-bottom-4 before:left-0">
            Guilherme Rodrigues
          </h1>

          <p className="font-montserrat text-2xl text-white mb-8">
            Desenvolvedor Web. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

          <p className="flex items-center">
            <FaBolt className="text-xl text-yellow-500 mr-2" />
            <span className="font-text text-lg text-gray-300">
              Especializado em desenvolvimento front-end ( JavaScript e React ).
            </span>
          </p>
          <p className="flex items-center">
            <RiComputerFill className="text-xl text-[#02866a] mr-2" />
            <span className="font-text text-lg text-gray-300">
              Desenvolvedor Web na Interativa Digital.
            </span>
          </p>

          <div className="flex gap-4 pt-28">
            <a
              className="flex items-center gap-2 font-montserrat text-white px-4 py-2 bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded"
              href="https://www.linkedin.com/in/guilhermerdeoliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" /> Linkedin
            </a>
            <a
              className="flex items-center gap-2 font-montserrat text-white px-4 py-2 bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded"
              href="https://github.com/rohyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" /> Github
            </a>
            <a
              className="flex items-center gap-2 font-montserrat text-white px-4 py-2 bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded"
              href="mailto:guilhermerl.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-white" /> E-mail
            </a>
          </div>
        </div>

        {/* <div className="flex flex-col gap-2 font-text text-white w-1/3">
          <p>- Introdução</p>
          <p className="font-semibold text-xl">Desenvolvedor Front-end</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aspernatur. Aperiam ducimus quaerat.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
