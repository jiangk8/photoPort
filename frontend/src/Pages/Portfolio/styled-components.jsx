import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 65px 65px 65px 325px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Title = styled.div`
  display: flex;
  background-color: #f6f4f4;
  font-family: Garamond;
  letter-spacing: 0.19em;
  font-size: 4vw;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
