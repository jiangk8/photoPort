import React from "react";
import styled from "styled-components";
import SideBar from "./Pages/SideBar/SideBar.jsx";
import Image from "./Pages/Image";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";
import Work from "./Pages/Work";
import "animate.css/animate.min.css";
import * as Scroll from "react-scroll";

const OutsideContainer = styled.div``;

function App() {
  return (
    <>
      <SideBar></SideBar>

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
