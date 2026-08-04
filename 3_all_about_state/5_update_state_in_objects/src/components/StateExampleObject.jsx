import { useState } from "react";

function StateExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Gourab",
    lastName: "Dutta",
    email: "xyz@gmail.com",
    phone: "1010101010",
    age: 23,
  });
  return (
    <div>
      <p>firstName: {person.firstName}</p>
      <p>lastName: {person.lastName}</p>
      <p>email: {person.email}</p>
      <p>phone: {person.phone}</p>
      <p>age: {person.age}</p>
      <button
        onClick={() => {
          setPerson((prevPerson) => ({
            ...prevPerson,
            age: prevPerson.age + 1,
          }));
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

export default StateExampleObject;
