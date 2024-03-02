import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #3470ff;
  height: 100px;
`;

export const NavWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 27px;
padding-left: 150px;
padding-right: 150px;
`
export const LeftBox = styled.div`
display: flex;
gap: 20px;

`
export const RightBox = styled.div`
display: flex;
gap: 40px;

`
export const Link = styled(NavLink)`
font-size: 25px;
font-weight: 600;
color: white;
&.active {
    color: darkblue;
}

`