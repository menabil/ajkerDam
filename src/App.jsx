import { Routes, Route } from "react-router";
import Rootlayout from "./component/layout/Rootlayout";
import Home from "./component/pages/Home";
import About from "./component/pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
