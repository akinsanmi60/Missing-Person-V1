import React from "react";
import HeaderWrapper, { FooterBox } from "./style";

function AppHeader() {
  return <HeaderWrapper>AppHeader</HeaderWrapper>;
}

export default AppHeader;

export const AppFooter = () => {
  const newYear = new Date().getFullYear();

  return (
    <FooterBox>
      <div className="copyright">
        <p>Copyright © People {newYear}. All rights reserved</p>
        <h4>People</h4>
      </div>
    </FooterBox>
  );
};
