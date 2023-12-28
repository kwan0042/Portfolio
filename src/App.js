import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Start from "./component/Main/Start";
import Layout from "./component/Main/Layout";
import Home from "./component/Main/HomeP/Home";
import WebProjects from "./component/WebProjects";
import GraphicProjects from "./component/GraphicProjects";
import VideoProjects from "./component/VideoProjects";
import useTheme from "./component/useTheme";

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const { theme, toggleTheme } = useTheme();
  // const containerRef = useRef(null);
  return (
    <>
      <Start />
      <Layout />

      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        containerRef={containerRef}
      > */}
      {/* <div className="main" data-scroll-container ref={containerRef}> */}
      <div className="theme" id="Theme">
        <div className="theme_btn mt-1" type="button" onClick={toggleTheme}>
          Dark / Light
        </div>
      </div>

      <div className={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/web" element={<WebProjects />} />
            <Route path="/graphic" element={<GraphicProjects />} />
            <Route path="/video" element={<VideoProjects />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* </div>
      </LocomotiveScrollProvider> */}
    </>
  );
}

export default App;
