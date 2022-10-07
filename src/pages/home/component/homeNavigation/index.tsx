import React, { useContext } from "react";
import AuthContext from "contexts/AuthProvider";
import { Link } from "react-router-dom";
import ButtonSection from "./style";

function HomeButton() {
  const { authUser } = useContext(AuthContext);

  const accounts = ["user", "admin", "staff"];
  const accountType = authUser?.user?.accountType;
  const user = authUser?.user && accounts.includes(accountType!);

  const pathURL = user ? "/auth_profile" : "/login";

  return (
    <ButtonSection>
      <div className="box">
        <div className="boxA">
          <div className="pbox">
            <Link to={pathURL}>
              <p>Add Missing Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to={pathURL}>
              <p>Add Found Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to={pathURL}>
              <p>Add Dead Person</p>
            </Link>
          </div>
        </div>
        <div className="boxB">
          <div className="pbox">
            <Link to="/tip_form">
              <p>Submit tip</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to="/police_contacts">
              <p>Police Contacts</p>
            </Link>
          </div>
        </div>
        <div className="boxC">
          <div className="pbox">
            <Link to="/identified_person">
              <p>Search Identified Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to="/missing_person">
              <p>Search Missing Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to="/dead_bodies">
              <p>Search Dead Person</p>
            </Link>
          </div>
        </div>
      </div>
    </ButtonSection>
  );
}

export default HomeButton;
