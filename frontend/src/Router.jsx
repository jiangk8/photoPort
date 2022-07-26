import { Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";

const Router = () => {
  return (
    <Routes>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
