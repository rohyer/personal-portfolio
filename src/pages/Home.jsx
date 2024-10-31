import Banner from "../sections/Banner";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Career from "../sections/Career";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home = ({ refAnchor1, refAnchor2, refAnchor3, refAnchor4 }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);

  return (
    <>
      {showBanner && (
        <>
          <Banner />
          <About refAnchor1={refAnchor1} />
          <Portfolio refAnchor2={refAnchor2} />
          <Career refAnchor3={refAnchor3} />
          <Contact refAnchor4={refAnchor4} />
        </>
      )}
    </>
  );
};

export default Home;
