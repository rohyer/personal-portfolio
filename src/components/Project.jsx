const Project = ({ title, description, img, page }) => {
  return (
    <div
      className={`relative group ${
        page
          ? "w-full max-h-[350px] sm:max-h-[400px] lg:max-h-[500px] xl:max-h-[550px] mb-20"
          : "w-full sm:w-[42%] sm-[45%] md:w-[30%] max-h-[400px] sm:max-h-[400px] md:max-h-[350px]"
      } overflow-hidden bg-[#242734]`}
    >
      <div className="pointer-events-none flex flex-col absolute left-0 top-0 w-full h-full z-10 px-4 py-8 opacity-0 transition-all group-hover:opacity-100 group-hover:backdrop-blur-sm bg-[#000000b3]">
        <p className="font-montserrat text-xl font-semibold text-white">
          {title}
        </p>
        <p className="font-montserrat text-sm font-semibold text-white mb-4">
          Responsável pelo desenvolvimento.
        </p>
        <p className="font-montserrat text-sm text-white">{description}</p>
      </div>
      <a href={img} data-fancybox="gallery">
        <img
          className={`w-full h-auto scale-[1.1] rotate-[-5deg] ${
            page
              ? "translate-x-[10px] translate-y-[70px] sm:translate-x-[20px] sm:translate-y-[100px] lg:translate-y-[140px]"
              : "translate-x-[10px] translate-y-[60px] sm:translate-x-[15px] sm:translate-y-[80px]"
          }`}
          src={img}
          alt=""
        />
      </a>
    </div>
  );
};

export default Project;
