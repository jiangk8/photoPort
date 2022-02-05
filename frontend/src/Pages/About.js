import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../node_modules/animate.css/animate.min.css";


const OuterCon = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 74vh;
    padding: 18vh 10vw 8vh 10vw;
    background-color: blue;
`
const InnerCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: red;
`
const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 8% 0% 0% 5%;
`

const SecondRow = styled.div`
    margin: 0% 5% 5% 5%;
    overflow: scroll;
`

const AboutBody = styled.p`
`
const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background-color: red;
`

const AboutMeImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`
const DividerBar = styled.hr`
    border: 1px solid grey;
    border-radius: 5px;
    margin: 7% 13% 0% 13%;
`
const FollowMeRow = styled.div`
    display: flex;
    flex-direction: row;
    margin: 7% 13% 0% 13%;
`

function About() {

    return(
        <OuterCon>
            <AboutMeDiv>
                <ScrollAnimation animateIn="nanimate__animated animate__fadeIn">
                <AboutMeImage src = {require('../Images/Selfy.jpg').default}/>
                </ScrollAnimation>
            </AboutMeDiv>
            <InnerCon>
                <FirstRow>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown">
                        <h1>
                            Arlette Nguyen
                        </h1>
                    </ScrollAnimation>
                </FirstRow>
                <SecondRow>
                    <AboutBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </AboutBody>
                    <AboutBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. 
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

export default About