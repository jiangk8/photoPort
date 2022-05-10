import React from 'react';
import * as Scroll from 'react-scroll'

import { Background, Title, NavButton, Logo } from './styled-components';

var scroller = Scroll.scroller;

function ToolBar() {
    return(
        <>
        <Background>
            <Logo>Arlette Nguyen</Logo>
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
                Portfolio 
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