import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebProjects from "./component/WebProjects";
import GraphicProjects from "./component/GraphicProjects";
import VideoProjects from "./component/VideoProjects";
import Home from "./component/Home";
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
