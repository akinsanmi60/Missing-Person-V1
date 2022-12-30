import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderWrapper, { FooterBox, SmallHeader } from "./style";
import moment from "moment";

function AppHeader() {
  const [timer, setTimer] = useState(new Date());
  const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userTime = moment().format("dddd, MMMM Do YYYY");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SmallHeader>
        <div className="text">
          <p>{timer.toLocaleTimeString()}</p>
          <p className="mobile">{userLocation}</p>
          <p className="mobile">{userTime}</p>
        </div>
      </SmallHeader>
      <HeaderWrapper>
        <div className="titlebox">
          <h1>
            <Link to="/">People</Link>
          </h1>
          <div className="box">
            <p>Hot-line:</p>
            <p>+2348164279799</p>
          </div>
        </div>
      </HeaderWrapper>
    </>
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
