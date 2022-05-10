import React, { useState, useEffect } from "react";
import {OuterCon, InnerCon, FirstRow, SecondRow, AboutBody, AboutMeDiv, AboutMeImage, DividerBar, FollowMeRow} from "./styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import "../../../node_modules/animate.css/animate.min.css";



function About() {
  return (
    <OuterCon>
      <AboutMeDiv>
        <ScrollAnimation animateIn="nanimate__animated animate__fadeIn">
          <AboutMeImage src={require("../../Images/Selfy.jpg").default} />
        </ScrollAnimation>
      </AboutMeDiv>
      <InnerCon>
        <FirstRow>
          <ScrollAnimation animateIn="animate__animated animate__fadeInDown">
            <h1>Arlette Nguyen</h1>
          </ScrollAnimation>
        </FirstRow>
        <SecondRow>
          <AboutBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AboutBody>
          <AboutBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AboutBody>
          {/* <ScrollAnimation animateIn="animate__animated animate__zoomIn" delay = "200">
                        <DividerBar/>
                    </ScrollAnimation>
                    <FollowMeRow>
                        
                    </FollowMeRow> */}
        </SecondRow>
      </InnerCon>
    </OuterCon>
  );
}

export default About;
