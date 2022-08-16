import { Routes, Route, Navigate } from "react-router-dom";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Family from "./Pages/Family/Family";
import Engagement from "./Pages/Engagement/Engagement";
import Portrait from "./Pages/Portrait/Portrait";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/portfolio' replace />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='family' element={<Family />} />
      <Route path='engagement' element={<Engagement />} />
      <Route path='portrait' element={<Portrait />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  );
};

export default Router;
