import React from "react";

import Person from "../types/person";

import "./PersonCard.css";

interface PersonProps {
  person: Person;
}

const PersonCard = (props: PersonProps) => {
  const { person } = props;

  return (
    <div className="person-root">
      <div className="person-basic-info">
        <img
          alt={`${person.firstName} ${person.lastName}`}
          src={person.image}
          className="person-image"
        />
        <div className="person-info">
          <div className="font-weight-bold">
            {person.firstName} {person.lastName}
          </div>
          <div>{person.email}</div>
          <div>&#x1F382;&nbsp; {person.birthDate.toDateString()}</div>
          <div>&#x1F464;&nbsp; {person.gender}</div>
          <div>&#x26D1;&nbsp; {person.jobType}</div>
          <div>&#x1F3E2;&nbsp; {person.jobTitle}</div>
          <div>
            &#x1F3E0;&nbsp; {person.address.street} {person.address.city}{" "}
            {person.address.state} {person.address.zipcode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;