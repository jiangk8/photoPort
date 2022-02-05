import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const OuterCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
const InnerCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 85%;
    background-color: red;
    margin: 11% 5% 4% 5%;
`
const FirstRow = styled.div``

const SecondRow = styled.div``

function Contact() {

    return(
        <OuterCon>
            <InnerCon>
                <FirstRow>
                    Contact
                </FirstRow>
                <SecondRow>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </SecondRow>
            </InnerCon>
        </OuterCon>
    );
}

export default Contact