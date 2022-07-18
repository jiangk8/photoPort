import React from "react";
import styled from "styled-components";
import SideBar from "./Pages/SideBar/SideBar";

import "animate.css/animate.min.css";
import Router from "./Router";
const OutsideContainer = styled.div``;

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Router />
    </div>
  );
};

export default App;
