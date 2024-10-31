import { MdKeyboardArrowRight } from "react-icons/md";

const Career = ({ refAnchor3 }) => {
  return (
    <section className="relative bg-[#242736]">
      <div id="carreira" className="absolute top-[-6rem]"></div>
      <div
        ref={refAnchor3}
        className="flex flex-col gap-8 lg:container lg:mx-auto xl:px-32 2xl:px-64 lg:px-32 px-8 py-16 sm:py-32"
      >
        <h2 className="font-montserrat text-[#70717c] font-semibold tracking-wider mb-4">
          - Carreira
        </h2>

        <div className="relative before:content[''] before:absolute before:w-[2px] before:h-[100%] before:bg-[#70717c]">
          <div className="mb-12 ml-6">
            <h4 className="font-sans text-white text-2xl mb-2">
              Desenvolvedor Web
            </h4>
            <p className="relative before:content[''] before:absolute before:left-[-28px] before:top-0 before:bottom-0 before:m-auto before:w-[11px] before:h-[11px] before:bg-yellow-500 before:rounded-full text-yellow-500">
              Outubro de 2020 - Atual
            </p>
            <p className="font-sans font-medium text-[#70717c] text-xl mb-2">
              Interativa Digital - Remoto
            </p>
            <ul className="text-white">
              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Desenvolvimento de sistemas: responsável pelo desenvolvimento
                  front-end usando Javascript, HTML, CSS, SASS e Gulp;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Manutenção de sistemas: encarregado de corrigir sistemas
                  desenvolvidos em JavaScript, React, Angular e Vue.js;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Desenvolvimento de sites: responsável pelo desenvolvimento
                  front-end usando JavaScript, HTML, CSS, SASS;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Manutenção de sites: responsável por correções e ajustes
                  usando JavaScript, HTML, CSS, SASS;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Implementação de melhorias de SEO: responsável por correções
                  focadas em melhoria no desempenho de busca do Google;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Deploy de sites em ambiente de produção;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Reuniões: participação em reuniões semanais e diárias
                  utilizando a metodologia ágil Kanban.
                </span>
              </li>
            </ul>
          </div>

          <div className="ml-6">
            <h4 className="font-sans text-white text-2xl mb-4">
              Desenvolvedor Web
            </h4>
            <p className="relative before:content[''] before:absolute before:left-[-28px] before:top-0 before:bottom-0 before:m-auto before:w-[11px] before:h-[11px] before:bg-yellow-500 before:rounded-full text-yellow-500">
              Agosto de 2017 - Junho de 2018
            </p>
            <p className="font-sans font-medium text-[#70717c] text-xl mb-2">
              NIDI Tecnologia
            </p>
            <ul className="text-white">
              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Desenvolvimento de lojas virtuais: responsável pelo
                  desenvolvimento usando HTML, CSS, SASS e Javascript nas
                  plataformas e-commerce Tray, Xtech e Loja Integrada;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Manutenção de e-commerces: Ajustes e melhorias de desempenho e
                  design de lojas virtuais;
                </span>
              </li>

              <li className="flex items-baseline">
                <MdKeyboardArrowRight />
                <span className="w-full">
                  Desenvolvimento de sites: responsável pelo desenvolvimento
                  front-end usando JavaScript, HTML, CSS e SASS.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
