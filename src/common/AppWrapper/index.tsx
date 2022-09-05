import React from "react";
import HeaderWrapper, { FooterBox } from "./style";

function AppHeader() {
  return (
    <HeaderWrapper>
      <h1>People</h1>
    </HeaderWrapper>
  );
}

export default AppHeader;

export const AppFooter = () => {
  const newYear = new Date().getFullYear();

  return (
    <FooterBox>
      <div className="copyright">
        <p>Copyright © People {newYear}.</p>
        <h4>People</h4>
      </div>
    </FooterBox>
  );
};
