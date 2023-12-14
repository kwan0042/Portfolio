import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebProjects from "./WebProjects";
import GraphicProjects from "./GraphicProjects";
import VideoProjects from "./VideoProjects";
import Home from "./Home";
import "./index.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webPJ" element={<WebProjects />} />
          <Route path="/graphPJ" element={<GraphicProjects />} />
          <Route path="/videoPJ" element={<VideoProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
