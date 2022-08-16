import React from "react";
import { Container } from "./styled-components";
import Gallery from "../Gallery/Gallery";

import tempImg from "../../Images/Selfy.jpg";

function Portrait() {
  return (
    <Container>
      <Gallery img1={tempImg} img2={tempImg} />
      <Gallery img1={tempImg} img2={tempImg} />
      <Gallery img1={tempImg} img2={tempImg} img3={tempImg} />
    </Container>
  );
}

export default Portrait;
