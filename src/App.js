import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Home/Home";
import Project from "./project/Project";
import Weather from "./project/Weather";
import Feedback from "./project/Feedback";
import Youtube from "./project/Youtube";
import Aflix from "./project/Aflix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/Aflix" element={<Aflix />} />
          <Route path="/project/youtube" element={<Youtube />} />
          <Route path="/project/weather" element={<Weather />} />
          <Route path="/project/feedback" element={<Feedback />} />
          <Route path="/project/:projectNum" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
