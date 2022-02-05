import React from 'react';
import styled from 'styled-components'
import ToolBar from './Pages/ToolBar'
import Image from './Pages/Image'
import About from './Pages/About';
import Contact from './Pages/Contact'
import Reviews from './Pages/Reviews';
import Work from './Pages/Work'
import "animate.css/animate.min.css";

const OutsideContainer = styled.div`
`

function App() {
  return (
  <>
   <ToolBar></ToolBar>
   <OutsideContainer>
     <Image></Image>
     <About></About>
     <Work></Work>
     <Reviews></Reviews>
     <Contact></Contact>
   </OutsideContainer>
  </>
  );
}

export default App;
