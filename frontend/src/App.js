import React from "react";
import styled from "styled-components";
import SideBar from "./Pages/SideBar/SideBar";
import Image from "./Pages/Image";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Work from "./Pages/Work";
import "animate.css/animate.min.css";
import * as Scroll from "react-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const OutsideContainer = styled.div``;

function App() {
  return (
    <>
      <Router>
        <SideBar></SideBar>
        <Routes>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Contact' element={<Contact />}></Route>
        </Routes>
      </Router>

      {/* <OutsideContainer>
      <Scroll.Element name = "Image">
        <Image/>
      </Scroll.Element>

      <Scroll.Element name = "About">
        <About/>
      </Scroll.Element>

      <Scroll.Element name = "Work">
        <Work/>
      </Scroll.Element>

      <Scroll.Element name = "Reviews">
        <Reviews/>
      </Scroll.Element>

      <Scroll.Element name = "Contact">
        <Contact/>
      </Scroll.Element>
     </OutsideContainer> */}
    </>
  );
}

export default App;
