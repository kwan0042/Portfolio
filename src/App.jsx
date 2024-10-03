import Home from "./component/Home";
import Start from "./component/Start";
import Navbar from "./component/Navbar";
import About from "./component/About";
import TechLang from "./component/TechLang";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased  selection:text-cy-cyan-900">
      <Start />
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Navbar />
      <div className="container mx-auto px-8 mt-[200px]">
        <Home />
        <About />
        <TechLang />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
