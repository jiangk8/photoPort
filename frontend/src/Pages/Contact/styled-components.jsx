import styled from 'styled-components'

export const OuterCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 72vh;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  margin: auto;
`
export const ContactTitle = styled.h1`
  font-size: 36px;
  text-align: center;
`

export const StyledInput = styled.input`
  font-family: inherit;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: unset;
  height: 42px;
  padding: 0px 10px;
  border: 1px solid #e2e8f0;
`

export const Message = styled.textarea`
  height: 100px;
  padding: 0px 10px;
  border: 1px solid #e2e8f0;
`

export const Label = styled.label``
export const SubmitButton = styled.button`
  width: 120px;
  height: 30px;
  margin: 20px auto auto;
`
export const SocialMediaHeader = styled.h2`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
`

export const SocialMediaBar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  height: 50%;
  padding: 1% 10% 0% 10%;
`

export const SocialMediaRef = styled.a`
  margin: 5%;
  transition: transform 250ms;
  display: inline-block;
  &:hover {
    transform: translateY(-2px);
  }
`

export const SocialMediaHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20%;
`

export const MessageHalf = styled.div`
  display: flex;
  flex-direction: column;
  height: 73%;
  width: 100%;
  padding: 3% 0% 3% 0%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 78%;
  width: 100%;
`
