import { Routes, Route } from "react-router-dom";

import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
