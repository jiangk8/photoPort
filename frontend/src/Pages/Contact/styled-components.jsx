import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 240px;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  width: 50%;
  padding: 65px 120px 65px;
`;

export const ContactTitle = styled.h1`
  font-size: 30px;
  text-align: left;
  font-family: Crimson Text;
  margin: 0px 0px 28px;
`;

export const Description = styled.p`
  text-align: left;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 20px;
  font-weight: 350;
`;

export const StyledInput = styled.input`
  margin: 10px 0px 30px;
  font-size: 13px;
  padding: 12px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fafafa;
`;

export const Message = styled.textarea`
  margin: 10px 0px 20px;
  padding: 12px;
  resize: vertical;
  height: 70px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background: #fafafa;
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 20px auto auto;
  border-radius: 10px;
  background-color: #3e4444;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const MessageHalf = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 450;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
