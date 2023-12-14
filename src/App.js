import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import Layout from "./component/Layout";
import Home from "./component/Home";
import WebProjects from "./component/WebProjects";
import GraphicProjects from "./component/GraphicProjects";
import VideoProjects from "./component/VideoProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web" element={<WebProjects />} />
          <Route path="graphic" element={<GraphicProjects />} />
          <Route path="video" element={<VideoProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
