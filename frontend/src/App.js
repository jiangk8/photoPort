import React from "react";
import styled from "styled-components";
import ToolBar from "./Pages/Toolbar/ToolBar";
import Image from "./Pages/Image/Image";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Reviews from "./Pages/Reviews/Reviews";
import Work from "./Pages/Work/Work";
import "animate.css/animate.min.css";
import * as Scroll from "react-scroll";

const OutsideContainer = styled.div``;

function App() {
  return (
    <div>
      <ToolBar></ToolBar>

      <OutsideContainer>
        <Scroll.Element name="Image">
          <Image />
        </Scroll.Element>

        <Scroll.Element name="About">
          <About />
        </Scroll.Element>

        <Scroll.Element name="Work">
          <Work />
        </Scroll.Element>

        <Scroll.Element name="Reviews">
          <Reviews />
        </Scroll.Element>

        <Scroll.Element name="Contact">
          <Contact />
        </Scroll.Element>
      </OutsideContainer>
    </div>
  );
}

export default App;
