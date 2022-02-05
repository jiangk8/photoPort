import React from 'react';
import styled from 'styled-components'

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

const Title = styled.div`
    margin-right: 50px;
`

const NavButton = styled.button`

`

function ToolBar() {
    return(
        <>
        <Background>
            <Title>About</Title>
            <Title>Work</Title>
            <Title>Reviews</Title>
            <Title>Contact</Title>
        </Background>
        </>
    )
}

export default ToolBar;