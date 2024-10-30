import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Project from "../components/Project";
import portfolioMainImg1 from "../assets/img/high-quality/portfolio-main-img-1.png";
import portfolioMainImg2 from "../assets/img/high-quality/portfolio-main-img-2.png";
import portfolioMainImg3 from "../assets/img/high-quality/portfolio-main-img-3.png";
import portfolioMainImg4 from "../assets/img/high-quality/portfolio-main-img-4.png";
import portfolioMainImg5 from "../assets/img/high-quality/portfolio-main-img-5.png";
import portfolioMainImg6 from "../assets/img/high-quality/portfolio-main-img-6.png";
import portfolioMainImg7 from "../assets/img/high-quality/portfolio-main-img-7.png";
import portfolioMainImg8 from "../assets/img/high-quality/portfolio-main-img-8.png";
import portfolioMainImg9 from "../assets/img/high-quality/portfolio-main-img-9.png";
import portfolioMainImg10 from "../assets/img/high-quality/portfolio-main-img-10.png";
import portfolioMainImg11 from "../assets/img/high-quality/portfolio-main-img-11.png";
import portfolioMainImg12 from "../assets/img/high-quality/portfolio-main-img-12.png";
import portfolioMainImg13 from "../assets/img/high-quality/portfolio-main-img-13.png";
import portfolioMainImg14 from "../assets/img/high-quality/portfolio-main-img-14.png";
import portfolioMainImg15 from "../assets/img/high-quality/portfolio-main-img-15.png";
import portfolioMainImg16 from "../assets/img/high-quality/portfolio-main-img-16.png";
import portfolioMainImg17 from "../assets/img/high-quality/portfolio-main-img-17.png";
import portfolioMainImg18 from "../assets/img/high-quality/portfolio-main-img-18.png";

const Portfolio = () => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  return (
    <div className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-32">
      <h1 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-8">
        - Portfólio
      </h1>

      <div className="flex justify-between flex-wrap gap-8">
        <Project
          title="Barbosa Bezerra Lima Advocacia."
          img={portfolioMainImg1}
          imgX="20"
          imgY="50"
        />
        <Project
          title="Novo Notícias."
          img={portfolioMainImg2}
          imgX="55"
          imgY="85"
        />
        <Project title="CAURN." img={portfolioMainImg3} imgX="35" imgY="65" />

        <Project
          title="Hapvendas."
          img={portfolioMainImg4}
          imgX="27"
          imgY="55"
        />
        <Project title="Sinmed." img={portfolioMainImg5} imgX="85" imgY="115" />
        <Project
          title="Elite Consultores."
          img={portfolioMainImg6}
          imgX="40"
          imgY="70"
        />
        <Project
          title="Chalés Litoral Nordeste."
          img={portfolioMainImg7}
          imgX="30"
          imgY="65"
        />
        <Project
          title="Foco Connect Imobiliária."
          img={portfolioMainImg8}
          imgX="30"
          imgY="65"
        />
        <Project
          title="Gastrocentro."
          img={portfolioMainImg9}
          imgX="40"
          imgY="75"
        />
        <Project
          title="Grupo Mendonça Barros."
          img={portfolioMainImg10}
          imgX="15"
          imgY="50"
        />
        <Project
          title="Idealy Corretora de Seguros."
          img={portfolioMainImg11}
          imgX="25"
          imgY="60"
        />
        <Project
          title="Instituto de Urologia Natal."
          img={portfolioMainImg12}
          imgX="25"
          imgY="60"
        />

        <Project
          title="Lázaro Imóveis."
          img={portfolioMainImg13}
          imgX="30"
          imgY="60"
        />
        <Project
          title="Multimedical."
          img={portfolioMainImg14}
          imgX="20"
          imgY="50"
        />
        <Project
          title="Pedro Wanderley Advocacia."
          img={portfolioMainImg15}
          imgX="40"
          imgY="75"
        />

        <Project
          title="PRM Engenharia."
          img={portfolioMainImg16}
          imgX="30"
          imgY="65"
        />
        <Project
          title="Reforest And Recycle For a Future."
          img={portfolioMainImg17}
          imgX="45"
          imgY="75"
        />
        <Project
          title="Shirley Ferreira Imóveis."
          img={portfolioMainImg18}
          imgX="50"
          imgY="85"
        />
      </div>
    </div>
  );
};

export default Portfolio;
