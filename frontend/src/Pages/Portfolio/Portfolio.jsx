import React from "react";
import { Container, Row, Image, Title, StyledLink } from "./styled-components";
import famImg from "../../Images/Family/05.jpg";
import coupleImg from "../../Images/Couple/25.jpg";
import portImg from "../../Images/Family/02.jpg";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Image src={famImg} />
        <Title>
          <StyledLink to='/family'>FAMILY</StyledLink>
        </Title>
      </Row>
      <Row>
        <Title>
          <StyledLink to='/couple'>COUPLE</StyledLink>
        </Title>
        <Image src={coupleImg} />
      </Row>
      <Row>
        <Image src={portImg} />
        <Title>
          <StyledLink to='/portrait'>PORTRAIT</StyledLink>
        </Title>
      </Row>
    </Container>
  );
}

export default Portfolio;
