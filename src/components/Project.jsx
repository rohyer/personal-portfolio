const Project = ({ title, img, page }) => {
  return (
    <div
      className={`relative group ${
        page ? "w-full max-h-[500px] mb-20" : "w-[30%] max-h-[350px]"
      } overflow-hidden bg-[#242734]`}
    >
      <div className="pointer-events-none flex flex-col absolute left-0 top-0 w-full h-full z-10 px-4 py-8 opacity-0 transition-all group-hover:opacity-100 group-hover:backdrop-blur-sm bg-[#000000b3]">
        <p className="font-montserrat text-xl font-semibold text-white">
          {title}
        </p>
        <p className="font-montserrat text-sm font-semibold text-white mb-4">
          Responsável pelo desenvolvimento.
        </p>
        {/* <p className="font-montserrat text-sm text-white">Descrição: </p> */}
      </div>
      <a href={img} data-fancybox="gallery">
        <img
          className={`w-full h-auto md:scale-[1.1] md:rotate-[-5deg] ${
            page
              ? "md:translate-x-[20px] md:translate-y-[140px]"
              : "md:translate-x-[15px] md:translate-y-[80px]"
          }`}
          src={img}
          alt=""
        />
      </a>
    </div>
  );
};

export default Project;
