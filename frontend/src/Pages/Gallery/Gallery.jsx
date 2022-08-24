import React from "react";
import { Row, Block, Image } from "./styled-components";

function Gallery(props) {
  return (
    <Row>
      <Block>
        <Image src={props.img1} />
      </Block>
      <Block>
        <Image src={props.img2} />
      </Block>
      <Block>
        <Image src={props.img3} />
      </Block>
    </Row>
  );
}

export default Gallery;
