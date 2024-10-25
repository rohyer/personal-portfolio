import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-[#242736]">
      <div className="flex flex-wrap justify-between gap-8 lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-32">
        <div className="w-full lg:w-2/5">
          <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-4">
            - Sobre mim
          </h2>

          <p className="font-sans text-white text-2xl mb-8">
            Graduado em Análise e Desenvolvimento de Sistemas pela Fatec.
          </p>

          <p className="font-text text-[#70717c] font-semibold mb-14">
            Pude desenvolver uma grande base de conhecimento durante minha
            formação. Passei desde algoritmos e estrutura de dados até
            desenvolvimento web, onde me especializei.
          </p>

          <a
            className="flex items-center font-montserrat font-semibold text-lg text-yellow-500 hover:opacity-[0.8] transition-all"
            href="/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" />
            Entre em contato
          </a>
        </div>

        <div className="w-full lg:w-[48%]">
          <p className="font-sans text-white text-2xl mt-2 mb-8">
            Já passei por duas empresas durante minha carreira atuando como
            desenvolvedor web em diversos projetos.
          </p>

          <p className="font-text text-[#70717c] font-semibold mb-16">
            Hoje na Interativa Digital contribuo diretamente no desenvolvimento
            de inúmeros sites entregando soluções eficientes para nossos
            queridos clientes.
          </p>

          <div className="flex">
            <div className="flex items-end gap-4 mt-4">
              <span className="font-text font-bold text-4xl xl:text-5xl 2xl:text-6xl leading-[46px] text-yellow-500">
                6
              </span>
              <span className="font-text text-[16px] tracking-wide leading-4 text-white w-28">
                anos de experiência
              </span>
            </div>

            <div className="flex items-end gap-4 mt-4">
              <span className="font-text font-bold text-4xl xl:text-5xl 2xl:text-6xl leading-[46px] text-yellow-500">
                + 100
              </span>
              <span className="font-text text-[16px] tracking-wide leading-4 text-white w-28">
                projetos entregues
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
