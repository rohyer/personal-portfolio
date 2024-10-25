import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import portfolioMainImg1 from "../assets/img/portfolio-main-img-1.png";
import portfolioMainImg2 from "../assets/img/portfolio-main-img-2.png";
import portfolioMainImg3 from "../assets/img/portfolio-main-img-3.png";
import portfolioMainImg4 from "../assets/img/portfolio-main-img-4.png";

const Portfolio = () => {
  return (
    <section className="bg-[#333646]">
      <div className="flex flex-col lg:container lg:mx-auto xl:px-64 lg:px-32 px-8 py-32">
        <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-2">
          - Portfólio
        </h2>

        <div className="columns-2 gap-x-20">
          <div className="w-full mb-24">
            <p className="font-sans text-white text-2xl mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <p className="font-text text-[#70717c] font-semibold mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <Link
              className="flex items-center font-montserrat font-semibold text-lg text-yellow-500"
              to="/portfolio"
            >
              Veja mais <FaArrowRight className="ml-4" />
            </Link>
          </div>

          <div className="w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <img
              className="w-full h-auto scale-[0.9] rotate-[-5deg] translate-x-[20px] translate-y-[45px]"
              src={portfolioMainImg1}
              alt=""
            />
          </div>
          <div className="w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <img
              className="w-full h-auto scale-[0.9] rotate-[-5deg] translate-x-[65px] translate-y-[0px]"
              src={portfolioMainImg2}
              alt=""
            />
          </div>
          <div className="w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <img
              className="w-full h-auto scale-[0.9] rotate-[-5deg] translate-x-[35px] translate-y-[45px]"
              src={portfolioMainImg3}
              alt=""
            />
          </div>
          <div className="w-full max-h-[500px] overflow-hidden bg-[#242734] mb-20">
            <img
              className="w-full h-auto scale-[0.9] rotate-[-5deg] translate-x-[25px] translate-y-[45px]"
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
