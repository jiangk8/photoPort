import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import { handleSubmit} from '../../api';
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
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: red;
`
const FirstRow = styled.h1`
    height: 20%;
    background-color: green;
    padding: 0% 2% 0% 2%;
    margin: 1% 0% 1% 0%;
`

const Name = styled.input`
    font-family: inherit;
    width: 90%;
    margin: 0% 5% 1% 5%;
`

const Email = styled.input`
    font-family: inherit;
    width: 90%;
    margin: 0% 5% 1% 5%;
`

const Phone = styled.input`
    font-family: inherit;
    width: 90%;
    margin: 0% 5% 0% 5%;
`

const Message = styled.textarea`
    font-family: inherit;
    height: 40%;
    width: 90%;
    margin: 0% 5% 1% 5%;
`

const Label = styled.label`
`
const SubmitButton = styled.input`
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
    margin-top: 5px;
    margin-bottom: 0px;
    
`
//background-color: pink;

const SocialMediaBar = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
    width: 80%;
    height: 50%;
    padding: 1% 10% 0% 10%;
    
`
//background-color: pink;

const SocialMediaRef = styled.a`
    margin: 5%;
    color: beige;
    transition: transform 250ms;
    display: inline-block;
    &:hover{
        transform: translateY(-2px);
    }
`

const SocialMediaHalf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 20%;
    width: 100%;
    background-color: pink;
`

const MessageHalf = styled.div`
    display: flex;
    flex-direction: column;
    height: 73%;
    width: 100%;
    padding: 3% 0% 3% 0%;
    background-color: blue;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 78%;
    width: 100%;
`


function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault()
        console.log(form)
        handleSubmit(form.current)
    }

    return(
        <OuterCon>
            <InnerCon>
                <FirstRow>
                    Get in contact! Send a message below and enter a return email :)
                </FirstRow>
                <Form ref={form} onSubmit={sendEmail}>
                    <MessageHalf>
                        <Message
                            type = "text"
                            value = {message}
                            maxLength = "600"
                            name = "message"
                            placeholder = 'Say Hi, Reach Out! '
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Name
                            type = "text"
                            placeholder = 'Full Name'
                            value = {name}
                            name = "from_name"
                            onChange={(e) => setName(e.target.value)}
                        />  
                        <Email
                            type = "text"
                            placeholder = 'Email'
                            value = {email}
                            name = "email"
                            onChange={(e) => setEmail(e.target.value)}
                        />  
                        <Phone
                            type = "text"
                            placeholder = 'Phone Number'
                            value = {phone}
                            name = "phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />  
                        <SubmitButton type = "submit" value="Send"/>
                    </MessageHalf>
                    <SocialMediaHalf>
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
                    </SocialMediaHalf>   
                </Form>
            </InnerCon>
        </OuterCon>
    );
}

export default Contact