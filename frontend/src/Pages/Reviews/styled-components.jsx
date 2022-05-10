import styled from 'styled-components'

export const OuterCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  background-color: pink;
`;
export const InnerCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 92%;
  height: 100%;
  padding: 0% 4% 0% 4%;
`;

export const ReviewDivider = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 90%;
  width: 30%;
  padding: 4% 1% 0% 1%;
  margin: 0% 1% 0 1%;
`;

export const ReviewImage = styled.img`
  object-fit: contain;
  width: 300px;
  height: 300px;
  padding: 0% 2% 0% 2%;
`;

export const ReviewContent = styled.div`
  height: 20%;
`;

export const ReviewBody = styled.p`
  text-align: center;
`;

export const ReviewBodyBold = styled.p`
  font-weight: bold;
`;

export const HR = styled.hr`
  border: 0;
  border-left: 0.5px solid beige;
  height: 95%;
`;