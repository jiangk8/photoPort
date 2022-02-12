import React from 'react';
import styled from 'styled-components'
import * as Scroll from 'react-scroll'

const Background = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    background-color: #ACBCD2;
    height: 32px;
    padding: 10px;
    width: 100%;
    align-items: center;
    padding-left: 6%;
    z-index: 5;
`

const Title = styled.button`
    margin-right: 50px;
`

const NavButton = styled.button`
`

var scroller = Scroll.scroller;

function ToolBar() {
    return(
        <>
        <Background>
            <Title onClick = {() => scroller.scrollTo("Image", 
            {   duration: 2000,
                delay: 100,
                smooth: true,
            })}> 
                Home 
            </Title>
            <Title onClick = {() => scroller.scrollTo("About",
            {   duration: 1000,
                delay: 100,
                smooth: true,
            })}> 
                About 
            </Title>
            <Title onClick = {() => scroller.scrollTo("Work",
            {   duration: 1000,
                delay: 100,
                smooth: true,
            })}> 
                Work 
            </Title>
            <Title onClick = {() => scroller.scrollTo("Reviews", 
            {   duration: 1000,
                delay: 100,
                smooth: true,
            })}> 
                Reviews 
            </Title>
            <Title onClick = {() => scroller.scrollTo("Contact", 
            {   duration: 1000,
                delay: 100,
                smooth: true,
            })}> 
                Contact 
            </Title>
        </Background>
        </>
    )
}

export default ToolBar;