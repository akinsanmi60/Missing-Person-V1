import React from "react";
import CardWrapper from "./style";

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
function CardPerson({ person }: CardProp) {
  return (
    <CardWrapper>
      <div className="card">
        <div className="image">
          <img src={person.image} alt="person" />
        </div>
        <div className="description">
          <div>
            <p>ID: {person.id}</p>
            <p>Last-Name: {person.lastName}</p>
            <p>First-Name: {person.firstName}</p>
            <p>Gender: {person.gender}</p>
            <p>DOB: {person.birthDate}</p>
            <p>Eye-Color: {person.eyeColor}</p>
            <p>Blood-Group: {person.bloodGroup}</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default CardPerson;
