import React, { useContext } from "react";
import AppHeader, { AppFooter } from "common/AppWrapper";
import { Link, Outlet } from "react-router-dom";
import OnlineStatusContext from "contexts/OnlineProvider";
import Wrapper from "./style";
import AuthContext from "contexts/AuthProvider";

const navigation = [
  {
    id: "1",
    path: "add_missing_person",
    title: "Add Missing Person",
  },
  {
    id: "2",
    path: "add_found_person",
    title: "Add Found Person",
  },
  {
    id: "3",
    path: "profile_settings",
    title: "Setting",
  },
];

function AppLayout() {
  const { authUser } = useContext(AuthContext);
  const { onlineStatus } = useContext(OnlineStatusContext);
  return (
    <>
      <AppHeader />
      <Wrapper>
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
              {navigation.map(item => (
                <div key={item.id} className="pbox">
                  <Link to={item.path}>
                    <p>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
      <AppFooter />
    </>
  );
}

export default AppLayout;
