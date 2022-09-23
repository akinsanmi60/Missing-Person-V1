import moment from "moment";
import React from "react";
import CardFound from "./style";

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
};
function CardPersonFound({ person }: CardProp) {
  const userTime = moment().format("dddd, MMMM Do YYYY");
  const time = moment().format("l");

  return (
    <CardFound>
      <div className="card">
        <div className="cardbox">
          <div className="box">
            <div className="image">
              <img src={person.image} alt="person" />
            </div>
            <div className="description">
              <div>
                <p>ID: 22{person.id}79543</p>
                <p>Last-Name: {person.lastName}</p>
                <p>First-Name: {person.firstName}</p>
                <p>Age: {person.age}</p>
                <p>Gender: {person.gender}</p>
                <p>Missed on: {time}</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={person.image} alt="person" />
            </div>
            <div className="description">
              <div>
                <p>ID: {person.id}</p>
                <p>Last-Name: {person.lastName}</p>
                <p>First-Name: {person.firstName}</p>
                <p>Age: {person.age}</p>
                <p>Gender: {person.gender}</p>
                <p>Found on: {time}</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="details">
              <p> Date Identified: {userTime}</p>
              <p>
                Note: She was found at a relative house. The relative directly
                contacted the family on the next day and informed
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardFound>
  );
}

export default CardPersonFound;
