import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Project from "../components/Project";
import portfolioMainImg1 from "../assets/img/just-page-portfolio/portfolio-main-img-1.png";
import portfolioMainImg2 from "../assets/img/just-page-portfolio/portfolio-main-img-2.png";
import portfolioMainImg3 from "../assets/img/just-page-portfolio/portfolio-main-img-3.png";
import portfolioMainImg4 from "../assets/img/just-page-portfolio/portfolio-main-img-4.png";
import portfolioMainImg5 from "../assets/img/just-page-portfolio/portfolio-main-img-5.png";
import portfolioMainImg6 from "../assets/img/just-page-portfolio/portfolio-main-img-6.png";
import portfolioMainImg7 from "../assets/img/just-page-portfolio/portfolio-main-img-7.png";
import portfolioMainImg8 from "../assets/img/just-page-portfolio/portfolio-main-img-8.png";
import portfolioMainImg9 from "../assets/img/just-page-portfolio/portfolio-main-img-9.png";
import portfolioMainImg11 from "../assets/img/just-page-portfolio/portfolio-main-img-11.png";
import portfolioMainImg14 from "../assets/img/just-page-portfolio/portfolio-main-img-14.png";
import portfolioMainImg15 from "../assets/img/just-page-portfolio/portfolio-main-img-15.png";
import portfolioMainImg16 from "../assets/img/just-page-portfolio/portfolio-main-img-16.png";
import portfolioMainImg22 from "../assets/img/just-page-portfolio/portfolio-main-img-22.png";
import portfolioMainImg24 from "../assets/img/just-page-portfolio/portfolio-main-img-24.png";

const Portfolio = () => {
  Fancybox.bind("[data-fancybox]", {});

  return (
    <div className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-32 animeLeft">
      <h1 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-8">
        - Portfólio
      </h1>

      <div className="flex justify-between flex-wrap gap-8">
        <Project
          title="Barbosa Bezerra Lima Advocacia."
          img={portfolioMainImg1}
        />
        <Project title="Novo Notícias." img={portfolioMainImg2} />
        <Project title="CAURN." img={portfolioMainImg3} imgX="35" imgY="65" />

        <Project title="Hapvendas." img={portfolioMainImg4} />
        <Project title="Sinmed." img={portfolioMainImg5} imgX="85" imgY="115" />
        <Project title="Elite Consultores." img={portfolioMainImg6} />
        <Project title="Chalés Litoral Nordeste." img={portfolioMainImg7} />
        <Project title="Foco Connect Imobiliária." img={portfolioMainImg8} />
        <Project title="Gastrocentro." img={portfolioMainImg9} />
        <Project
          title="Idealy Corretora de Seguros."
          img={portfolioMainImg11}
        />
        <Project title="Multimedical." img={portfolioMainImg14} />
        <Project title="Pedro Wanderley Advocacia." img={portfolioMainImg15} />

        <Project title="PRM Engenharia." img={portfolioMainImg16} />
        <Project
          title="AMARN Associação dos Magistrados do RN."
          img={portfolioMainImg22}
        />
        <Project title="Atual Viagens." img={portfolioMainImg24} />
      </div>
    </div>
  );
};

export default Portfolio;
