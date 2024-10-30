import portfolioMainImg2 from "../assets/img/high-quality/portfolio-main-img-2.png";
import portfolioMainImg1 from "../assets/img/high-quality/portfolio-main-img-1.png";
import portfolioMainImg3 from "../assets/img/high-quality/portfolio-main-img-3.png";
import portfolioMainImg4 from "../assets/img/high-quality/portfolio-main-img-4.png";
import portfolioMainImg5 from "../assets/img/high-quality/portfolio-main-img-5.png";
import portfolioMainImg9 from "../assets/img/high-quality/portfolio-main-img-9.png";

const Portfolio = () => {
  return (
    <div className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-32">
      <h1 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-8">
        - Portfólio
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <div className="relative group w-[30%] max-h-[350px] overflow-hidden bg-[#242734] mb-20">
          <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 group-hover:backdrop-blur-sm bg-[#000000b3]">
            <p className="font-montserrat text-xl font-semibold text-white">
              Barbosa Bezerra Lima Advocacia.
            </p>
            <p className="font-montserrat text-md font-semibold text-white mb-4">
              Responsável pelo desenvolvimento.
            </p>
            <p className="font-montserrat text-sm text-white">Descrição: </p>
          </div>
          <img
            className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[20px] md:translate-y-[50px]"
            src={portfolioMainImg1}
            alt=""
          />
        </div>

        <div className="relative group w-[30%] max-h-[350px] overflow-hidden bg-[#242734] mb-20">
          <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 group-hover:backdrop-blur-sm bg-[#000000b3]">
            <p className="font-montserrat text-xl font-semibold text-white">
              Barbosa Bezerra Lima Advocacia.
            </p>
            <p className="font-montserrat text-md font-semibold text-white mb-4">
              Responsável pelo desenvolvimento.
            </p>
            <p className="font-montserrat text-sm text-white">Descrição: </p>
          </div>
          <img
            className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[20px] md:translate-y-[50px]"
            src={portfolioMainImg1}
            alt=""
          />
        </div>
        <div className="relative group w-[30%] max-h-[350px] overflow-hidden bg-[#242734] mb-20">
          <div className="flex flex-col absolute left-0 top-0 w-full h-full z-10 px-8 py-8 opacity-0 transition-all group-hover:opacity-100 group-hover:backdrop-blur-sm bg-[#000000b3]">
            <p className="font-montserrat text-xl font-semibold text-white">
              Barbosa Bezerra Lima Advocacia.
            </p>
            <p className="font-montserrat text-md font-semibold text-white mb-4">
              Responsável pelo desenvolvimento.
            </p>
            <p className="font-montserrat text-sm text-white">Descrição: </p>
          </div>
          <img
            className="w-full h-auto md:scale-[1.1] md:rotate-[-5deg] md:translate-x-[20px] md:translate-y-[50px]"
            src={portfolioMainImg1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
