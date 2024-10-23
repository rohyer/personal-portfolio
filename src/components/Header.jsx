import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-500">
      <div className="flex items-center lg:container lg:mx-auto lg:px-32 px-8 lg:h-24 h-16">
        <FaCode className="text-4xl text-yellow-500" />
      </div>
    </header>
  );
};

export default Header;
