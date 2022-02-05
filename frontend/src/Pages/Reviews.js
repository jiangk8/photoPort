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
    width: 100%;
    height: 100%;
    background-color: red;
`

const ReviewDivider = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    height: 92%;
    width: 30%;
    padding: 4% 1% 4% 1%;
`

const ReviewImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5%;
`

const ReviewContent = styled.div`

`

const ReviewBody = styled.p`

`

const ReviewBold = styled.p`

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
                </ReviewDivider>
                <ReviewDivider>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">
                        <ReviewImage src = {images[1]}/>
                    </ScrollAnimation>
                </ReviewDivider>
                <ReviewDivider>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInDown">
                        <ReviewImage src = {images[2]}/>
                    </ScrollAnimation>
                </ReviewDivider>
            </InnerCon>
        </OuterCon>
    );
}

export default Reviews