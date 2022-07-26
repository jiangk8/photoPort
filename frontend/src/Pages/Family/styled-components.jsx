import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 65px 65px 65px 325px;
`;

export const BlockOne = styled.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 2px;
`;

export const ImageOne = styled.img`
  width: 100%;
`;

export const BlockTwo = styled.div`
  display: flex;
  height: auto;
  width: auto;
  overflow: hidden;
  margin-bottom: 2px;
`;

export const Margin = styled.div`
  margin-right: ${(props) => props.marginRight ?? 6}px; ;
`;

export const ImageTwo = styled.img`
  width: 100%;
`;
