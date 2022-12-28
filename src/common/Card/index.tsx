/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import CardWrapper from "./style";
import { useNavigate } from "react-router-dom";

type CardProp = {
  person: {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    bloodGroup: string;
    age: string;
    gender: string;
    email: string;
    image: string;
    address: {
      address: string;
      city: string;
      postalcode: string;
    };
    birthDate: string;
    height: number;
    weight: number;
    hair: {
      color: string;
      type: string;
    };
    eyeColor: string;
  };
  view?: string;
};
function CardPerson({ person, view }: CardProp) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/users/${person.id}`);
  };

  return (
    <CardWrapper>
      <div className="card">
        <div className="image">
          <img src={person.image} alt="person" />
        </div>
        <div className="description" onClick={handleNavigate}>
          <div>
            <p>ID: {person.id}</p>
            <p>Last-Name: {person.lastName}</p>
            <p>First-Name: {person.firstName}</p>
            <p>Gender: {person.gender}</p>
            <p>DOB: {person.birthDate}</p>
            <p>Eye-Color: {person.eyeColor}</p>
            <p>Blood-Group: {person.bloodGroup}</p>
          </div>
          <div
            className="overlay"
            style={{
              backgroundColor:
                view === "Missing Person"
                  ? "rgb(56, 1, 56, 0.5)"
                  : view === "Dead Body"
                  ? "rgb(58, 97, 134, 0.5)"
                  : "rgb(14, 32, 56, 0.5)",
            }}
          >
            <div className="btnbox">
              <button className="btn" onClick={handleNavigate}>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default CardPerson;
