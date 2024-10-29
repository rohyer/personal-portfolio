import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import portfolioMainImg1 from "../assets/img/portfolio-main-img-1.png";
import portfolioMainImg2 from "../assets/img/portfolio-main-img-2.png";
import portfolioMainImg3 from "../assets/img/portfolio-main-img-3.png";
import portfolioMainImg4 from "../assets/img/portfolio-main-img-4.png";

const Portfolio = ({ refAnchor2 }) => {
  return (
    <section className="relative bg-[#333646]">
      <div id="portfolio" className="absolute top-[-6rem]"></div>
      <div
        ref={refAnchor2}
        className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-32"
      >
        <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-2">
          - Portfólio
        </h2>

        <div className="columns-1 md:columns-2 gap-x-20">
          <div className="w-full mb-24">
            <p className="font-sans text-white text-2xl mb-8">
              Confira abaixo alguns dos projetos que participei.
            </p>

            <p className="font-text text-[#70717c] font-semibold mb-16">
              Muitos deles foram desenvolvidos em equipe com designers e
              gerentes de projetos, onde eu fui o responsável por toda a parte
              de desenvolvimento.
            </p>

            <Link
              className="flex items-center font-montserrat font-semibold text-lg text-yellow-500"
              to="/portfolio"
            >
              Veja mais <FaArrowRight className="ml-4" />
            </Link>
          </div>

          <div className="relative group w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 bg-[#000000b3]">
              <p className="font-montserrat text-xl font-semibold text-white">
                Barbosa Bezerra Lima Advocacia.
              </p>
              <p className="font-montserrat text-md font-semibold text-white mb-4">
                Responsável pelo desenvolvimento.
              </p>
              <p className="font-montserrat text-sm text-white">Descrição: </p>
            </div>
            <img
              className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[40px] md:translate-y-[170px]"
              src={portfolioMainImg1}
              alt=""
            />
          </div>
          <div className="relative group w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 bg-[#000000b3]">
              <p className="font-montserrat text-xl font-semibold text-white">
                Novo Notícias.
              </p>
              <p className="font-montserrat text-md font-semibold text-white mb-4">
                Responsável pelo desenvolvimento.
              </p>
              <p className="font-montserrat text-sm text-white">Descrição: </p>
            </div>
            <img
              className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[95px] md:translate-y-[220px]"
              src={portfolioMainImg2}
              alt=""
            />
          </div>
          <div className="relative group w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 bg-[#000000b3]">
              <p className="font-montserrat text-xl font-semibold text-white">
                CAURN.
              </p>
              <p className="font-montserrat text-md font-semibold text-white mb-4">
                Responsável pelo desenvolvimento.
              </p>
              <p className="font-montserrat text-sm text-white">Descrição: </p>
            </div>
            <img
              className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[55px] md:translate-y-[180px]"
              src={portfolioMainImg3}
              alt=""
            />
          </div>
          <div className="relative group w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 bg-[#000000b3]">
              <p className="font-montserrat text-xl font-semibold text-white">
                Hapvendas.
              </p>
              <p className="font-montserrat text-md font-semibold text-white mb-4">
                Responsável pelo desenvolvimento.
              </p>
              <p className="font-montserrat text-sm text-white">Descrição: </p>
            </div>
            <img
              className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[45px] md:translate-y-[170px]"
              src={portfolioMainImg4}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
