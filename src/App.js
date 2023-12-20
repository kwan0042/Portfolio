import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Start from "./component/Main/Start";
import Layout from "./component/Main/Layout";
import Home from "./component/Home";
import WebProjects from "./component/WebProjects";
import GraphicProjects from "./component/GraphicProjects";
import VideoProjects from "./component/VideoProjects";
import useTheme from "./component/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="theme" id="Theme" x-data="">
        <button
          className="btn btn-outline-light mb-1"
          type="button"
          onClick={toggleTheme}
        >
          Dark/Light
        </button>
      </div>

      <div className={theme}>
        <Start />
        <Layout />
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
    </>
  );
}

export default App;
