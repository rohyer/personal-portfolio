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
        </div>
      </div>
    </section>
  );
};

export default Contact;
