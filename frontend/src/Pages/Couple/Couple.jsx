import React from "react";
import { Container } from "./styled-components";
import Gallery from "../Gallery/Gallery";

function Couple() {
  function importAll(r) {
    let images = [];
    r.keys().forEach((item) => {
      images.push(r(item).default);
    });
    return images;
  }

  const images = importAll(
    require.context("../../Images/Couple/", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Container>
      <Gallery img1={images[25]} />
      <Gallery img1={images[17]} img2={images[16]} />
      <Gallery img1={images[2]} img2={images[22]} />
      <Gallery img1={images[18]} img2={images[1]} />
      <Gallery img1={images[21]} img2={images[20]} />
      <Gallery img1={images[0]} />
      <Gallery img1={images[26]} img2={images[4]} />
      <Gallery img1={images[13]} img2={images[11]} />
      <Gallery img1={images[10]} img2={images[9]} />
      <Gallery img1={images[3]} />
      <Gallery img1={images[8]} img2={images[15]} />
      <Gallery img1={images[14]} img2={images[19]} />
      <Gallery img1={images[6]} img2={images[5]} />
      <Gallery img1={images[27]} img2={images[24]} img3={images[23]} />
    </Container>
  );
}

export default Couple;
