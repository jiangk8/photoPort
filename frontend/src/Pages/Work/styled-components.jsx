import styled from "styled-components";

export const OuterCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: green;
  margin: 50px;
`;
export const PhotoComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  height: 100%;
  margin: 50px;
`;
export const PhotoMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  height: 7%;
  margin: 50px;
`;
export const MenuBarButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 12%;
  height: 100%;
  margin-right: 2px;
  border: none;
  &:hover {
    background-color: #e7e7e7;
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  margin: 50px;
`;

export const Photos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 93%;
  margin: 50px;
`;

export const PhotoReel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  width: 86%;
  height: 98%;
  padding: 1% 7% 1% 7%;
  margin: 50px;
`;

export const RightButton = styled.button`
  height: 5%;
  width: 5%;
  margin-left: -5%;
  z-index: 4;
  margin: 50px;
`;
export const LeftButton = styled.button`
  height: 5%;
  width: 5%;
  margin-right: -5%;
  z-index: 4;
  margin: 50px; 
`;

export const ImageBox = styled.div`
  display: flex;
  width: 25%;
  height: 50%;
  overflow: hidden;
  margin: 50px;
`;

export const Picture = styled.img`
  object-fit: contain;
  height: 96%;
  width: 96%;
  padding: 2%;
  margin: 50px;
`;