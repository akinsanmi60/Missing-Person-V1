/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import AppHeader, { AppFooter } from "common/AppWrapper";
import { Link, Outlet } from "react-router-dom";
import OnlineStatusContext from "contexts/OnlineProvider";
import Wrapper from "./style";
import AuthContext from "contexts/AuthProvider";
import { userNavigation } from "utils/navRoutes";
import NewsIndex from "common/NewsIndex";
import { availableNews } from "./type";

function AppLayout() {
  const { authUser, logout } = useContext(AuthContext);
  const { onlineStatus } = useContext(OnlineStatusContext);

  return (
    <div>
      <AppHeader />
      <Wrapper>
        <NewsIndex availableNews={availableNews} />
        <div className="container">
          <div className="formbox">
            <Outlet />
          </div>
          <div className="userbox">
            <div className="head">
              <h1>Hi {authUser?.user.firstName}</h1>
              <p>{onlineStatus ? "🟢online" : "🔴disconnected"}</p>
            </div>
            <div className="navbox">
              {userNavigation.map(item => (
                <div key={item.id} className="pbox">
                  <Link to={item.path}>
                    <p>{item.title}</p>
                  </Link>
                </div>
              ))}

              <div className="pbox" onClick={logout}>
                Logout
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <AppFooter />
    </div>
  );
}

export default AppLayout;
