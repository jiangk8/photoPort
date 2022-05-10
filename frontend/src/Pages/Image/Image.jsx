import React, { useState, useEffect } from "react";
import { PhotoReelHolder } from "./styled-components";
import { Carousel } from "react-carousel-minimal";

//transform: translateX(100%);

//justify-content: center;
// align-content: center;
// align-items: center;
//padding: 5vh 5vh 5vh 5vh;

var images = [
  // {
  //     image: "https://drive.google.com/uc?export=view&id=1AOiG4_UVfnFP2RcO_9NIwEvIABlvkF6g",
  //     caption: "photo",
  // },
  // {
  //     image: require('../Images/3.jpg').default,
  //     caption: "photo",
  // },
  // {
  //     image: require('../Images/4.jpg').default,
  //     caption: "photo",
  // },
  // {
  //     image: require('../Images/5.jpg').default,
  //     caption: "photo",
  // },
  // {
  //     image: require('../Images/6.jpg').default,
  //     caption: "photo",
  // },
];

//var files = []

function Image() {
  function importAll(r) {
    // let i = {};
    // r.keys().map((item, index) => { i[item.replace('./', '')] = r(item); });
    // return i;
    let i = [];
    r.keys().map((item) =>
      i.push({
        image: require("../../Images/MainScroll/" + item.replace("./", ""))
          .default,
        caption: "photo",
      })
    );
    //console.log("hello world")
    return i;
  }

  // useEffect(() => {
  //     images = importAll(require.context('../Images/MainScroll', false, /\.(png|jpe?g|svg)$/));
  //     // f.forEach(element => {
  //     //     files.push({image: element, caption: "photo"})
  //     // });
  //     // console.log(files)
  //     console.log(images[0].image)
  //     // console.log(f)
  // })

  //console.log(images)

  images = importAll(
    require.context("../../Images/MainScroll", false, /\.(png|jpe?g|svg)$/)
  );
  // console.log(images)

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
    // <div>
    //     <img src = {images[0].image}></img>
    // </div>
  );
}

export default Image;
