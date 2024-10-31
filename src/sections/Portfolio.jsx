import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Project from "../components/Project";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import portfolioMainImg1 from "../assets/img/just-page-portfolio/portfolio-main-img-1.png";
import portfolioMainImg3 from "../assets/img/just-page-portfolio/portfolio-main-img-3.png";
import portfolioMainImg2 from "../assets/img/just-page-portfolio/portfolio-main-img-2.png";
import portfolioMainImg5 from "../assets/img/just-page-portfolio/portfolio-main-img-5.png";

const Portfolio = ({ refAnchor2 }) => {
  Fancybox.bind("[data-fancybox]", {});

  return (
    <section className="relative bg-[#333646]">
      <div id="portfolio" className="absolute top-[-6rem]"></div>
      <div
        ref={refAnchor2}
        className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 pt-16 pb-8 sm:py-32"
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

          <Project
            title="Barbosa Bezerra Lima Advocacia."
            description="Escritório de advocacia presente em Natal - RN e São Paulo - SP. O site foca em apresentar o escritório dividindo-o em suas áreas de atuação, contendo um blog para cada área e seções de apresentação dos advogados proporcionando uma maior presença online para o escritório."
            img={portfolioMainImg1}
            page="home"
          />
          <Project
            title="NOVO Notícias."
            description="Portal de Notícias online de Natal e região. O site foca em apresentar as notícias separando-as por seus níveis de destaques e categorias. Também apresenta páginas para os blogueiros filtrando e apresentando suas próprias notícias."
            img={portfolioMainImg2}
            page="home"
          />
          <Project
            title="CAURN."
            description="Caixa Assistencial Universitária do Rio Grande do Norte. O site tem o principal objetivo de apresentar toda a rede de atendimento médico separando-as por rede CAURN, médicos, clínicas, especialidades e locais de atendimentos, listando os médicos e clínicas disponíveis. Também apresenta a instituição de forma geral, seus planos e um blog contendo suas notícias."
            img={portfolioMainImg3}
            page="home"
          />
          <Project
            title="Sinmed RN."
            description="Sindicato dos Médicos do Rio Grande do Norte. o Site apresenta informações sobre o sindicato, seções de notícias separando-as por suas categorias, como também seus serviços disponíveis e diversos documentos para download."
            img={portfolioMainImg5}
            page="home"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
