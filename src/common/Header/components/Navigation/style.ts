import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  .boxnav {
    display: flex;
    justify-content: space-between;
  }
  .drawerbox {
    margin-top: 10px;
  }
  .navitemsbox {
    display: flex;
    gap: 30px;
    padding: 7px 13px;

    .Link {
      color: #3e3e3e;
      font-weight: 700;
      font-size: 16px;
      margin-top: 5px;
      /* padding: 7px 13px; */
      text-decoration: none;
      line-height: 1em;
      cursor: pointer;
      &.active {
        border-top: 2px;
        color: yellow;
        font-weight: 900;
      }
    }
  }

  @media screen and (max-width: 908px) {
    .navitemsbox {
      display: none;
    }
  }
  @media screen and (min-width: 908px) {
    .drawerbox {
      display: none;
    }
  }
  @media screen and (min-width: 1026px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
  }
`;
export default NavigationStyled;

export const NavLink = styled(Link)`
  color: #16194f;
  display: flex;
  font-size: 25px;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
    font-weight: 900;
  }
`;

export const NavBtnLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
