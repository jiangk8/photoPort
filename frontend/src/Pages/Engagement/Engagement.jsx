import React from "react";
import { Container } from "./styled-components";
import tempImg from "../../Images/Selfy.jpg";
import Gallery from "../Gallery/Gallery";

function Engagement() {
  return (
    <Container>
      <Gallery img1={tempImg} />
      <Gallery img1={tempImg} img2={tempImg} img3={tempImg} />
    </Container>
  );
}

export default Engagement;
