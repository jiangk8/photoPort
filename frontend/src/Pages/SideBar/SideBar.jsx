import React from "react";
import {StyledProSideBar, StyledMenu, StyledMenuItem, StyledSubMenu, StyledSidebarHeader, StyledSidebarContent, MenuDiv, Line, MenuItemDiv, StyledLink} from "./styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from '../About/About';
import Contact from "../Contact/Contact";



function ToolBar() {
  return (
      <StyledProSideBar>
        <StyledSidebarHeader>
          <StyledSidebarContent> ARLETTE </StyledSidebarContent>
          <StyledSidebarContent marginLeft={25}> NGUYEN </StyledSidebarContent>
        </StyledSidebarHeader>
        <StyledMenu>
        <StyledLink to='/Portfolio'>
          <StyledSubMenu title="PORTFOLIO" open="true"/>
          </StyledLink>
            <MenuDiv>
            <Line/>
            <MenuItemDiv>
            <StyledLink to='/Family'><StyledMenuItem>FAMILY</StyledMenuItem></StyledLink>
            <StyledLink to='/Engagement'><StyledMenuItem>ENGAGEMENT</StyledMenuItem></StyledLink>
            <StyledLink to='/Portrait'><StyledMenuItem>PORTRAIT</StyledMenuItem></StyledLink>
            </MenuItemDiv>
            </MenuDiv>
          <StyledLink to='/About'>
          <StyledSubMenu title="ABOUT ME" open="true"/>
          </StyledLink>
          <StyledLink to='/Contact'>
          <StyledSubMenu title="CONTACT"open="true"/>
          </StyledLink>
        </StyledMenu>
      </StyledProSideBar>
  );
}

export default ToolBar;
