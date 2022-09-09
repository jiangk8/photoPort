import React from "react";
import { Container } from "./styled-components";
import Gallery from "../Gallery/Gallery";

function Family() {
  function importAll(r) {
    let images = [];
    r.keys().forEach((item) => {
      images.push(r(item).default);
    });
    return images;
  }

  const images = importAll(
    require.context("../../Images/Family/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Container>
      <Gallery img1={images[5]} />
      <Gallery img1={images[7]} img2={images[3]} img3={images[2]} />
      <Gallery img1={images[6]} />
      <Gallery img1={images[1]} img2={images[4]} />
      <Gallery img1={images[8]} />
    </Container>
  );
}

export default Family;
