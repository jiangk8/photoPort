import React from "react";
import {StyledProSideBar, StyledMenu, StyledMenuItem, StyledSubMenu, StyledSidebarHeader, StyledSidebarContent, MenuDiv, Line, MenuItemDiv} from "./styled-components";
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
          <StyledSubMenu title="PORTFOLIO" open="true">
            <Link to='/Portfolio'/>
            <MenuDiv>
            <Line/>
            <MenuItemDiv>
            <StyledMenuItem>FAMILY <Link to='/Family'/></StyledMenuItem>
            <StyledMenuItem>ENGAGEMENT <Link to='/Engagement'/></StyledMenuItem>
            <StyledMenuItem>PORTRAIT <Link to='/Portrait'/></StyledMenuItem>
            </MenuItemDiv>
            </MenuDiv>
          </StyledSubMenu>
          <StyledSubMenu title="ABOUT ME" open="true"> <Link to='/About'/></StyledSubMenu>
          <StyledSubMenu title="CONTACT"open="true"> <Link to='/Contact'/></StyledSubMenu>
        </StyledMenu>
      </StyledProSideBar>
  );
}

export default ToolBar;
