const Contact = () => {
  return (
    <section className="bg-[#242736]">
      <div className="flex justify-between gap-8 lg:container lg:mx-auto xl:px-64 lg:px-32 px-8 py-32">
        <div className="w-1/3">
          <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-4">
            - Contato
          </h2>

          <p className="font-sans text-white text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>

          <p className="font-text text-[#70717c] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="w-1/2">
          <p className="font-sans text-white text-2xl mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            officiis! Magni.
          </p>

          <p className="font-text text-[#70717c] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            officiis! Magni beatae dicta excepturi accusamus earum, adipisci.
          </p>

          <div className="flex items-end gap-4 mt-4">
            <span className="font-text font-bold text-6xl leading-[46px] text-yellow-500">
              6
            </span>
            <span className="font-text text-[16px] tracking-wide leading-4 text-white w-28">
              anos de experiência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
