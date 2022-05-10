import styled from 'styled-components'

export const OuterCon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 74vh;
  background-color: blue;
`;
export const InnerCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  background-color: red;
`;
export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8% 0% 0% 5%;
`;

export const SecondRow = styled.div`
  margin: 0% 5% 5% 5%;
  overflow: scroll;
`;

export const AboutBody = styled.p``;
export const AboutMeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: red;
`;

export const AboutMeImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const DividerBar = styled.hr`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 7% 13% 0% 13%;
`;
export const FollowMeRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7% 13% 0% 13%;
`;