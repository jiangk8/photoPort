import React, { useState, useRef } from "react";
import {
  ContactForm,
  ContactTitle,
  Description,
  Message,
  SubmitButton,
  MessageHalf,
  Form,
  StyledInput,
  Container,
} from "./styled-components";
import "animate.css/animate.min.css";
import { handleSubmit } from "../../api";

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
    <Container>
      <ContactForm>
        <ContactTitle>Contact</ContactTitle>
        <Description>
          For all pricing and booking inquiries, please fill out the form below.
          Please include as much relevant information as possible, for example,
          the location of the project, desired date, and intended usage of the
          images.
        </Description>
        <Description>I look forward to hearing from you soon.</Description>
        <Form ref={form} onSubmit={sendEmail}>
          <MessageHalf>
            Full Name *
            <StyledInput
              type='text'
              value={name}
              name='from_name'
              maxLength={60}
              required
              onChange={(e) => setName(e.target.value)}
            />
            Email *
            <StyledInput
              type='text'
              value={email}
              name='email'
              maxLength={60}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            Phone Number *
            <StyledInput
              type='text'
              value={phone}
              name='phone'
              maxLength={10}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            Message *
            <Message
              type='text'
              value={message}
              maxLength='600'
              name='message'
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <SubmitButton type='submit'>Submit</SubmitButton>
          </MessageHalf>
        </Form>
      </ContactForm>
      <ContactForm></ContactForm>
    </Container>
  );
}

export default Contact;
