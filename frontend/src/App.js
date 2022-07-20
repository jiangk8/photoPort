import React from "react";
import SideBar from "./Pages/SideBar/SideBar";

import "animate.css/animate.min.css";
import Router from "./Router";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Router />
    </div>
  );
};

export default App;
