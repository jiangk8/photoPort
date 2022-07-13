import React from "react";
import {StyledProSideBar, StyledMenu, StyledMenuItem, StyledSubMenu, StyledSidebarHeader, StyledSidebarContent, MenuDiv, Line, MenuItemDiv} from "./styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function ToolBar() {
  return (
      <StyledProSideBar>
        <StyledSidebarHeader>
          <StyledSidebarContent> ARLETTE </StyledSidebarContent>
          <StyledSidebarContent marginLeft={25}> NGUYEN </StyledSidebarContent>
        </StyledSidebarHeader>
        <StyledMenu>
          <StyledSubMenu title="PORTFOLIO" open="true">
            <MenuDiv>
            <Line/>
            <MenuItemDiv>
            <StyledMenuItem>FAMILY</StyledMenuItem>
            <StyledMenuItem>FOOD</StyledMenuItem>
            <StyledMenuItem>PORTRAIT</StyledMenuItem>
            <StyledMenuItem>SCENERY</StyledMenuItem>
            </MenuItemDiv>
            </MenuDiv>
          </StyledSubMenu>
          <StyledSubMenu title="ABOUT ME" open="true"></StyledSubMenu>
          <StyledSubMenu title="CONTACT"open="true"></StyledSubMenu>
        </StyledMenu>
      </StyledProSideBar>
  );
}

export default ToolBar;
