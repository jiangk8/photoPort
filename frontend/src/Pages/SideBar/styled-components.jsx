import styled from 'styled-components';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from "react-pro-sidebar";
import { Link } from "react-router-dom";


export const StyledProSideBar = styled(ProSidebar)`
width: auto;
position: fixed;
font-family: Crimson Text;
line-height: 1.4em;
color: #000;
padding: 65px 0px 65px;
`

export const StyledSidebarHeader = styled(SidebarHeader)`
line-height: 40px;
margin: 0px 40px 25px;
`

export const StyledSidebarContent = styled(SidebarContent)`
font-size: 1.7em;
letter-spacing: 4px;
margin-left:${(props) =>props.marginLeft ?? 0}px;
`

export const StyledMenu = styled(Menu)`
letter-spacing: 3px;
font-size: 18px;;
letter-spacing: 1.4px;
line-height: 1.8em;

`

export const StyledSubMenu = styled(SubMenu)`
list-style-type: none;
&:hover {
    color: #A9A9A9;
}
`

export const StyledMenuItem = styled(MenuItem)`
list-style-type: none;
font-size: 16px;
margin-left: 20px;
&:hover {
    color: #A9A9A9;
}

`
export const MenuDiv = styled.div`
display: flex;
flex-direction: row;
`

export const Line = styled.div`
background-color: grey;
width: 1px;
height: 100px;
margin-top: 2px;
`

export const MenuItemDiv = styled.div`
`

export const StyledLink = styled(Link)`
color: #000;
text-decoration: none;
`

/*
        <Route exact path='/About' element={< About />}></Route>
        <Route exact path='/Contact' element={< Contact />}></Route>
        <Route exact path='/Portfolio' element={< Portfolio/>}></Route>
        <Route exact path='/Family' element={< Family />}></Route>
        <Route exact path='/Engagement' element={< Engagement />}></Route>
        <Route exact path='/Portrait' element={< Portrait />}></Route>
        */