import React from "react";
import styled from "styled-components";
import ToolBar from "./Pages/ToolBar";
import Image from "./Pages/Image";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Reviews from "./Pages/Reviews";
import Work from "./Pages/Work";
import "animate.css/animate.min.css";
import * as Scroll from "react-scroll";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const OutsideContainer = styled.div``;

function App() {
  return (
    <ProSidebar>
      <Menu>
        <SubMenu title="Portfolio" open="true">
          <MenuItem>Family</MenuItem>
          <MenuItem>Food</MenuItem>
          <MenuItem>Food</MenuItem>
          <MenuItem>Food</MenuItem>
        </SubMenu>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </ProSidebar>
    // <>
    //  <ToolBar></ToolBar>

    //  <OutsideContainer>
    //   <Scroll.Element name = "Image">
    //     <Image/>
    //   </Scroll.Element>

    //   <Scroll.Element name = "About">
    //     <About/>
    //   </Scroll.Element>

    //   <Scroll.Element name = "Work">
    //     <Work/>
    //   </Scroll.Element>

    //   <Scroll.Element name = "Reviews">
    //     <Reviews/>
    //   </Scroll.Element>

    //   <Scroll.Element name = "Contact">
    //     <Contact/>
    //   </Scroll.Element>
    //  </OutsideContainer>
    // </>
  );
}

export default App;
