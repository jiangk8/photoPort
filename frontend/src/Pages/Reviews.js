import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const OuterCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 80vh;
    padding: 14vh 5vw 6vh 5vw;
    background-color: pink;
`
const InnerCon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    background-color: red;
    padding: 0% 5% 0% 5%;
`

const ReviewDivider = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 90%;
    width: 31%;
    padding: 4% 1% 0% 1%;
`

const ReviewImage = styled.img`
    object-fit: contain;
    width: 300px;
    height: 300px;
    padding: 0% 2% 0% 2%;
`

const ReviewContent = styled.div`
    height: 20%;
`

const ReviewBody = styled.p`
    text-align: center;
`

const ReviewBodyBold = styled.p`
    font-weight: bold;
`

const HR = styled.hr`
    border: 0;
    border-left: .5px solid beige;
    height: 95%;
`

var images = []

function Reviews() {

    function importAll(r) {
        // let i = {};
        // r.keys().map((item, index) => { i[item.replace('./', '')] = r(item); });
        // return i;  
        let i = []
        r.keys().map((item) =>
            i.push(require("../Images/ReviewImages/" + item.replace('./', '')).default)
        )
        return i
    }

    images = importAll(require.context('../Images/ReviewImages', false, /\.(png|jpe?g|svg)$/))

    return(
        <OuterCon>
            <InnerCon>
                <ReviewDivider>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown"> 
                        <ReviewImage src = {images[0]}/>
                    </ScrollAnimation>
                    <ReviewContent>
                        <ReviewBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna <b>aliqua</b>.
                        </ReviewBody>
                    </ReviewContent>
                </ReviewDivider>
                <HR/>
                <ReviewDivider>
                    <ReviewContent>
                        <ReviewBody>
                            Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing elit, <b>sed do eiusmod tempor</b> incididunt 
                            ut labore et dolore magna aliqua.
                        </ReviewBody>
                    </ReviewContent>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp"> 
                        <ReviewImage src = {images[1]}/>
                    </ScrollAnimation>
                </ReviewDivider>
                <HR/>
                <ReviewDivider>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown"> 
                        <ReviewImage src = {images[2]}/>
                    </ScrollAnimation>
                    <ReviewContent>
                        <ReviewBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut <b>labore et dolore magna aliqua</b>.
                        </ReviewBody>
                    </ReviewContent>
                </ReviewDivider>
            </InnerCon>
        </OuterCon>
    );
}

export default Reviews