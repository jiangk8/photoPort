import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const OuterCon = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    background-color: pink;
`
const PhotoReel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: hidden;
    background-color: red;
    height: 92%;
    width: 90%;
    margin: 6% 5% 2% 5%;
    `
//    overflow-x: scroll;

const ImageBox = styled.div`
    display: flex;
    width: 25%;
    height: 50%;
    overflow: hidden;
`

const Picture = styled.img`
    object-fit: contain;
    height: 96%;
    width: 96%;
    padding: 2%;
`

var images = []

function Work() {

    function importAll(r) {
        // let i = {};
        // r.keys().map((item, index) => { i[item.replace('./', '')] = r(item); });
        // return i;  
        let i = []
        r.keys().map((item) =>
            i.push({'image': require("../Images/MainScroll/"+item.replace('./', '')).default})
        );
        //console.log("hello world")
        //console.log(i)
        return i
    }

    images = importAll(require.context('../Images/MainScroll', false, /\.(png|jpe?g|svg)$/))
    // console.log(images)
    return(
        <OuterCon>
            <PhotoReel>
                {images.map((i, k) =>
                    <ImageBox>
                        <Picture src = {i.image}/>
                    </ImageBox>
                )}
            </PhotoReel>
        </OuterCon>
    );
}

export default Work