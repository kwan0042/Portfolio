import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Start from "./component/Start";
import Navbar from "./component/Navbar";
import About from "./component/About";
import TechLang from "./component/TechLang";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import GraphicPj from "./component/GraphicPj";
import { useState, useEffect } from "react";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased  selection:text-cy-cyan-900">
        <Start />
        {showMainContent && (
          <>
            <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <Navbar />
            <div className="container mx-auto px-8 mt-[200px]">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <TechLang />
                      <About />
                      <Experience />
                      <Projects />
                      <Contact />
                    </>
                  }
                />

                <Route path="/gra_des/:designId" element={<GraphicPj />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
