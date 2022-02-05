import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const OuterCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    height: 72vh;
    padding: 22vh 20vw 7vh 20vw;
`
const InnerCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: red;
`
const FirstRow = styled.h1`
    padding: 0% 2% 0% 2%;
`

const Email = styled.input`
    font-family: inherit;
    width: 90%;
    margin: 0% 5% 0% 5%;
`

const Message = styled.textarea`
    font-family: inherit;
    height: 30%;
    width: 90%;
    margin: 1% 5% 1% 5%;
`

const Label = styled.label`
`
const SubmitButton = styled.button`
    background-color: #e7e7e7;
    color: black;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    width: 12%;
    margin: 2% 44% 1% 44%;
    border: none;
    &:hover{
        background-color: #555555;
        color: white;
    }
`
const SocialMediaBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 20%;
    background-color: pink;
    margin: 5% 5% 1% 5%;
`


function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    return(
        <OuterCon>
            <InnerCon>
                <FirstRow>
                    Get in contact! Send a message below and enter a return email :)
                </FirstRow>
                <Message
                    type = "text"
                    value = {message}
                    maxLength = "600"
                    placeholder = 'Say Hi, Reach Out! '
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Email
                    type = "text"
                    placeholder = 'Email'
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />     
                <SubmitButton>
                    Submit
                </SubmitButton>   
                <SocialMediaBar>
                </SocialMediaBar>    
            </InnerCon>
        </OuterCon>
    );
}

export default Contact