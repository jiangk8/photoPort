import { Routes, Route } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Family from "./Pages/Family/Family";
import Engagement from "./Pages/Engagement/Engagement";
import Portrait from "./Pages/Portrait/Portrait";

const Router = () => {
  return (
    <Routes>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='/family' element={<Family />}></Route>
      <Route path='/engagement' element={<Engagement />}></Route>
      <Route path='/portrait' element={<Portrait />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
