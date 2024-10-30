import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useEffect, useRef } from "react";
import Portfolio from "./pages/Portfolio";

function App() {
  const refLink1 = useRef(null);
  const refLink2 = useRef(null);
  const refLink3 = useRef(null);
  const refLink4 = useRef(null);

  return (
    <BrowserRouter>
      <Header
        refLink1={refLink1}
        refLink2={refLink2}
        refLink3={refLink3}
        refLink4={refLink4}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              refAnchor1={refLink1}
              refAnchor2={refLink2}
              refAnchor3={refLink3}
              refAnchor4={refLink4}
            />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
