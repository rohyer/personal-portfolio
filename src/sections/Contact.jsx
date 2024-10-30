import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = ({ refAnchor4 }) => {
  return (
    <section className="relative bg-[#333646]">
      <div id="contato" className="absolute top-[-6rem]"></div>
      <div
        ref={refAnchor4}
        className="flex flex-col lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 pt-32 pb-32"
      >
        <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-8">
          - Contato
        </h2>

        <div className="flex justify-between">
          <div className="w-full sm:w-2/3">
            <p className="font-sans text-white text-2xl mb-0">
              Tem algum projeto?
            </p>
            <p className="font-sans text-white text-2xl mb-8">
              Fale comigo através dos links abaixo!
            </p>

            <div className="flex gap-4">
              <a
                className="flex items-center gap-2 font-montserrat text-white px-4 py-2 bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded"
                href="https://api.whatsapp.com/send?phone=5584981056717&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Guilherme."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white" /> Whatsapp
              </a>
              <a
                className="flex items-center gap-2 font-montserrat text-white px-4 py-2 bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded"
                href="mailto:guilhermerl.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="text-white" /> E-mail
              </a>
            </div>
          </div>

          {/* <div className="w-2/5">
            <form action="" className="flex flex-col">
              <label htmlFor="name" className="font-sans text-white text-xl">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-transparent outline-none border-b-[1px] px-1 py-2 border-[#70717c] text-gray-300 mb-4"
                required
              />

              <label htmlFor="email" className="font-sans text-white text-xl">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-transparent outline-none border-b-[1px] px-1 py-2 border-[#70717c] text-gray-300 mb-4"
                required
              />

              <label htmlFor="message" className="font-sans text-white text-xl">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-transparent outline-none border-b-[1px] px-1 py-2 border-[#70717c] text-gray-300 mb-4"
                required
              ></textarea>

              <input
                type="submit"
                value="Enviar"
                className="w-[150px] py-2 text-white bg-[#eab3080d] hover:bg-[#eab30826] transition-all rounded cursor-pointer"
              />
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
