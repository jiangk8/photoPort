import React from "react";
import {
  Container,
  Margin,
  BlockOne,
  BlockTwo,
  ImageOne,
  ImageTwo,
} from "./styled-components";
import tempImg from "../../Images/Selfy.jpg";

function Family() {
  return (
    <Container>
      <BlockTwo>
        <Margin>
          <ImageTwo src={tempImg} />
        </Margin>
        <Margin>
          <ImageTwo src={tempImg} />
        </Margin>
        <Margin marginRight={0}>
          <ImageTwo src={tempImg} />
        </Margin>
      </BlockTwo>
      <BlockTwo>
        <Margin>
          <ImageTwo src={tempImg} />
        </Margin>
        <Margin>
          <ImageTwo src={tempImg} />
        </Margin>
        <Margin marginRight={0}>
          <ImageTwo src={tempImg} />
        </Margin>
      </BlockTwo>
    </Container>
  );
}

export default Family;
