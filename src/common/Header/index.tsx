import AuthContext from "contexts/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HeaderBox from "./style";
import moment from "moment";
import { Link } from "react-router-dom";

function Header() {
  const [timer, setTimer] = useState(new Date());
  const { authUser } = useContext(AuthContext);
  const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userTime = moment().format("dddd, MMMM Do YYYY");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderBox>
      <div className="small_nav">
        <div className="text">
          <p>{timer.toLocaleTimeString()}</p>
          <p className="mobile">{userLocation}</p>
          <p className="mobile">{userTime}</p>
          <p>Help Line: +23481642797</p>
        </div>
        {authUser?.user ? (
          <div className="span">
            <p>
              <Link to="/auth_profile">Dashbord</Link>
            </p>
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
