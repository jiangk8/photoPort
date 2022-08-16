import React from "react";
import {
  StyledProSideBar,
  StyledMenu,
  StyledMenuItem,
  StyledSubMenu,
  StyledSidebarHeader,
  StyledSidebarContent,
  MenuDiv,
  Line,
  MenuItemDiv,
} from "./styled-components";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <StyledProSideBar>
      <StyledSidebarHeader>
        <StyledSidebarContent> ARLETTE </StyledSidebarContent>
        <StyledSidebarContent marginLeft={25}> NGUYEN </StyledSidebarContent>
      </StyledSidebarHeader>
      <StyledMenu>
        <StyledSubMenu
          title='PORTFOLIO'
          open='true'
          onClick={() => navigate("/portfolio")}
        />
        <MenuDiv>
          <Line />
          <MenuItemDiv>
            <StyledMenuItem onClick={() => navigate("/family")}>
              FAMILY
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/couple")}>
              COUPLE
            </StyledMenuItem>
            <StyledMenuItem onClick={() => navigate("/portrait")}>
              PORTRAIT
            </StyledMenuItem>
          </MenuItemDiv>
        </MenuDiv>
        <StyledSubMenu
          title='ABOUT ME'
          open='true'
          onClick={() => navigate("/about")}
        />
        <StyledSubMenu
          title='CONTACT'
          open='true'
          onClick={() => navigate("/contact")}
        />
      </StyledMenu>
    </StyledProSideBar>
  );
}

export default SideBar;
