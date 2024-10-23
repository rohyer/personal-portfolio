import { FaLinkedin, FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="flex justify-between gap-8 lg:container lg:mx-auto lg:px-64 px-8 py-16 bg-[#333646]">
      <div>
        <h1 className="relative font-sans  text-white before:block before:absolute before:h-2 before:w-20 before:bg-yellow-500 before:-bottom-4 before:left-0">
          <p className="text-5xl">Guilherme</p>
          <p className="text-6xl">Rodrigues</p>
        </h1>

        <div className="flex gap-4 pt-16">
          <FaLinkedin className="text-white" />
          <FaGithub className="text-white" />
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
    </section>
  );
};

export default Banner;
