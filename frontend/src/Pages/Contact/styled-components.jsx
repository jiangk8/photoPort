import styled from 'styled-components'

export const OuterCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 72vh;
`;
export const InnerCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 100%;
`;
export const FirstRow = styled.h1`
  height: 20%;
  padding: 0% 2% 0% 2%;
  margin: 1% 0% 1% 0%;
`;

export const Name = styled.input`
  font-family: inherit;
  margin: 0% 5% 1% 5%;
`;

export const Email = styled.input`
  font-family: inherit;
  margin: 0% 5% 1% 5%;
`;

export const Phone = styled.input`
  font-family: inherit;
  margin: 0% 5% 0% 5%;
`;

export const Message = styled.textarea`
  font-family: inherit;
  height: 40%;
  margin: 0% 5% 1% 5%;
`;

export const Label = styled.label``;
export const SubmitButton = styled.input`
  color: black;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  width: 12%;
  margin: 2% 44% 1% 44%;
  border: none;
  &:hover {
    background-color: #555555;
    color: white;
  }
`;
export const SocialMediaHeader = styled.h2`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
`;
//background-color: pink;

export const SocialMediaBar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  height: 50%;
  padding: 1% 10% 0% 10%;
`;
//background-color: pink;

export const SocialMediaRef = styled.a`
  margin: 5%;
  transition: transform 250ms;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const SocialMediaHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20%;
`;

export const MessageHalf = styled.div`
  display: flex;
  flex-direction: column;
  height: 73%;
  width: 100%;
  padding: 3% 0% 3% 0%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 78%;
  width: 100%;
`;