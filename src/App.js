import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Start from "./component/Start";
import Home from "./component/Home";
import WebProjects from "./component/WebProjects";
import GraphicProjects from "./component/GraphicProjects";
import VideoProjects from "./component/VideoProjects";

function App() {
  return (
    <BrowserRouter>
      <Start />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/web" element={<WebProjects />} />
        <Route path="/graphic" element={<GraphicProjects />} />
        <Route path="/video" element={<VideoProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
