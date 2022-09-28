import React from "react";
import { Link } from "react-router-dom";
import ButtonSection from "./style";

function HomeButton() {
  return (
    <ButtonSection>
      <div className="box">
        <div className="boxA">
          <div className="pbox">
            <Link to="/login">
              <p>Add Missing Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to="/login">
              <p>Add Found Person</p>
            </Link>
          </div>
          <div className="pbox">
            <Link to="/login">
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
