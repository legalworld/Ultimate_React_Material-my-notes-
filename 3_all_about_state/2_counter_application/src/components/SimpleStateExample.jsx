import { useState } from "react";

function SimpleStateExample() {
  const [firstName, setFirstName] = useState("john");

  console.log("component Rendered");
  return (
    <div className="App">
      <h1>{firstName}</h1>
      <button
        onClick={() => {
          setFirstName((prevName) => (prevName === "john" ? "Bill" : "john"));
        }}
      >
        Toggle Name
      </button>
    </div>
  );
}

export default SimpleStateExample;
