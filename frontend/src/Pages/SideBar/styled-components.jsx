import styled from 'styled-components';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from "react-pro-sidebar";


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
& .pro-inner-item {
    &:hover {
        color: #A9A9A9;
    }
}
`

export const StyledMenuItem = styled(MenuItem)`
list-style-type: none;
font-size: 16px;
&:hover {
    color: #A9A9A9;
}

`
export const MenuDiv = styled.div`
display: flex;
flex-direction: row;
margin-left: -40px;
`

export const Line = styled.div`
background-color: grey;
width: 1px;
height: 130px;
`

export const MenuItemDiv = styled.div`
margin-left: 20px;
`