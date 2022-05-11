import React, { useState, useEffect } from "react";
import { PhotoReelHolder } from "./styled-components";
import { Carousel } from "react-carousel-minimal";


var images = [];


function Image() {
  function importAll(r) {
    let i = [];
    r.keys().map((item) =>
      i.push({
        image: require("../../Images/MainScroll/" + item.replace("./", ""))
          .default,
        caption: "photo",
      })
    );
    return i;
  }


  images = importAll(
    require.context("../../Images/MainScroll", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <PhotoReelHolder>
      <Carousel
        data={images}
        dots={true}
        height="80vh"
        width="90vw"
        automatic={true}
        time={3000}
        slideImageFit="cover"
      />
    </PhotoReelHolder>
  );
}

export default Image;
