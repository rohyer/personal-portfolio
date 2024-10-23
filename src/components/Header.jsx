import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-500">
      <div className="flex items-center justify-between lg:container lg:mx-auto lg:px-64 px-8 lg:h-24 h-16">
        <Link to="/">
          <FaCode className="text-4xl text-yellow-500" />
        </Link>

        <nav>
          <ul className="flex gap-6">
            <li className="font-sans text-xl">
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className="font-sans text-xl">
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
