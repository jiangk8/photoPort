import React from "react";
import { Block, Margin, Image } from "./styled-components";

function Gallery(props) {
  return (
    <Block>
      <Margin>
        <Image src={props.img1} />
      </Margin>
      <Margin>
        <Image src={props.img2} />
      </Margin>
      <Margin>
        <Image src={props.img3} />
      </Margin>
    </Block>
  );
}

export default Gallery;
