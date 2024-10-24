import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <section className="bg-[#333646]">
      <div className="flex justify-between gap-8 lg:container lg:mx-auto xl:px-64 lg:px-32 px-8 py-32">
        <div>
          <h1 className="relative font-sans  text-white before:block before:absolute before:h-2 before:w-20 before:bg-yellow-500 before:-bottom-4 before:left-0">
            <p className="text-5xl">Guilherme</p>
            <p className="text-6xl">Rodrigues</p>
          </h1>

          <div className="flex gap-4 pt-28">
            <a
              href="https://www.linkedin.com/in/guilhermerdeoliveira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://github.com/rohyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" />
            </a>
            <a
              href="mailto:guilhermerl.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-text text-white w-1/3">
          <p>- Introdução</p>
          <p className="font-semibold text-xl">Desenvolvedor Front-end</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            aspernatur. Aperiam ducimus quaerat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
