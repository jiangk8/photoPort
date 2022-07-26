import React from "react";
import {
  Container,
  Image,
  Description,
  Title,
  Body,
} from "./styled-components";
import selfy from "../../Images/Selfy.jpg";

function About() {
  return (
    <Container>
      <Description>
        <Title>About Me</Title>
        <Body>
          Who are you?” said the Caterpillar. This was not an encouraging
          opening for a conversation. Alice replied, rather shyly, “I—I hardly
          know, Sir, just at present—at least I know who I was when I got up
          this morning, but I think I must have been changed several times since
          then.” “What do you mean by that?” said the Caterpillar, sternly.
          “Explain yourself!” “I ca’n’t explain myself, I’m afraid, Sir,” said
          Alice, “because I am not myself, you see.” —Chapter 5, Advice from a
          Caterpillar
        </Body>
        <Body>
          “In that direction,” the Cat said, waving its right paw round, “lives
          a Hatter: and in that direction,” waving the other paw, “lives a March
          Hare. Visit either you like: they’re both mad.” “But I don’t want to
          go among mad people,” Alice remarked. “Oh, you ca’n’t help that,” said
          the Cat: “we’re all mad here. I’m mad. You’re mad.” “How do you know
          I’m mad?” said Alice. “You must be,” said the Cat, “or you wouldn’t
          have come here.” —Chapter 6, Pig and Pepper
        </Body>
      </Description>
      <Image src={selfy}></Image>
    </Container>
  );
}

export default About;
