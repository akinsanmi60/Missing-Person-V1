import AuthContext from "contexts/AuthProvider";
import React, { useContext } from "react";
import Navigation from "./components/Navigation";
import HeaderBox from "./style";

function Header() {
  const { authUser } = useContext(AuthContext);
  const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userTime = new Date().toLocaleString();

  return (
    <HeaderBox>
      <div className="small_nav">
        <div className="text">
          <p className="mobile">{userLocation}</p>
          <p className="mobile">{userTime}</p>
          <p>Help Line: +23481642797</p>
        </div>
        {authUser?.user ? (
          <div className="span">
            <p>Dashbord</p>
          </div>
        ) : null}
      </div>
      <div className="big_nav">
        <Navigation />
      </div>
    </HeaderBox>
  );
}

export default Header;
