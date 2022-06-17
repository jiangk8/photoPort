import React from 'react'
import styled from 'styled-components'
import ToolBar from './Pages/Toolbar/ToolBar'
import Image from './Pages/Image/Image'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Reviews from './Pages/Reviews/Reviews'
import Work from './Pages/Work/Work'
import 'animate.css/animate.min.css'
import * as Scroll from 'react-scroll'

const Divider = styled.div`
  font-family: 'Share Tech Mono', monospace;
  color: black;
  font-size: 6vh;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 0.09em;
    min-width: 30vw;
  }

  &::before {
    background: linear-gradient(to right, rgba(240, 240, 240, 0), black);
    margin-right: 4vh;
  }

  &::after {
    background: linear-gradient(to left, rgba(240, 240, 240, 0), black);
    margin-left: 4vh;
  }
`

function App() {
  return (
    <div>
      <ToolBar></ToolBar>

      <div>
        <Scroll.Element name="Image">
          <Image />
        </Scroll.Element>
        <Divider>About</Divider>

        <Scroll.Element name="About">
          <About />
        </Scroll.Element>
        <Divider>Work</Divider>

        <Scroll.Element name="Work">
          <Work />
        </Scroll.Element>
        <Divider>Reviews</Divider>
        <Scroll.Element name="Reviews">
          <Reviews />
        </Scroll.Element>
        <Divider>Contact</Divider>
        <Scroll.Element name="Contact">
          <Contact />
        </Scroll.Element>
      </div>
    </div>
  )
}

export default App
