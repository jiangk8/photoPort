import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

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
const SocialMediaHeader = styled.h2`
    text-align: center;
    color: beige;
    margin-top: 3%;
    margin-bottom: 0%;
    background-color: pink;
`

const SocialMediaBar = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
    width: 80%;
    height: 3%;
    padding: 3% 10% 5% 10%;
    background-color: pink;
`

const SocialMediaRef = styled.a`
    margin: 5%;
    color: beige;
    transition: transform 250ms;
    display: inline-block;
    &:hover{
        transform: translateY(-2px);
    }
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
                <SocialMediaHeader>
                    - Follow Me @ -
                </SocialMediaHeader>
                <SocialMediaBar>
                    <SocialMediaRef href='https://www.youtube.com'>
                        <FontAwesomeIcon icon = {faYoutube} size="2x"/>
                    </SocialMediaRef>
                    <SocialMediaRef href='https://www.facebook.com'>
                        <FontAwesomeIcon icon = {faFacebook} size="2x"/>
                    </SocialMediaRef>
                    <SocialMediaRef href='https://www.twitter.com'> 
                        <FontAwesomeIcon icon = {faTwitter} size="2x"/>
                    </SocialMediaRef>
                    <SocialMediaRef href='https://www.instagram.com'>
                        <FontAwesomeIcon icon = {faInstagram} size="2x"/>
                    </SocialMediaRef>
                </SocialMediaBar>    
            </InnerCon>
        </OuterCon>
    );
}

export default Contact