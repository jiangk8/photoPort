import React, { useState, useRef } from "react";
import {OuterCon, InnerCon, FirstRow, Name, Email, Phone, Message, Label, SubmitButton, SocialMediaHeader, SocialMediaBar, SocialMediaRef, SocialMediaHalf, MessageHalf, Form } from "./styled-components";
import "animate.css/animate.min.css";
import { handleSubmit } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(form);
    handleSubmit(form.current);
  };

  return (
    <OuterCon>
      <InnerCon>
        <FirstRow>
          Get in contact! Send a message below and enter a return email :)
        </FirstRow>
        <Form ref={form} onSubmit={sendEmail}>
          <MessageHalf>
            <Message
              type="text"
              value={message}
              maxLength="600"
              name="message"
              placeholder="Say Hi, Reach Out! "
              onChange={(e) => setMessage(e.target.value)}
            />
            <Name
              type="text"
              placeholder="Full Name"
              value={name}
              name="from_name"
              onChange={(e) => setName(e.target.value)}
            />
            <Email
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Phone
              type="text"
              placeholder="Phone Number"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <SubmitButton type="submit" value="Let's Connect" />
          </MessageHalf>
          <SocialMediaHalf>
            <SocialMediaHeader>- Follow Me @ -</SocialMediaHeader>
            <SocialMediaBar>
              <SocialMediaRef href="https://www.youtube.com">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </SocialMediaRef>
              <SocialMediaRef href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </SocialMediaRef>
              <SocialMediaRef href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </SocialMediaRef>
              <SocialMediaRef href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </SocialMediaRef>
            </SocialMediaBar>
          </SocialMediaHalf>
        </Form>
      </InnerCon>
    </OuterCon>
  );
}

export default Contact;
