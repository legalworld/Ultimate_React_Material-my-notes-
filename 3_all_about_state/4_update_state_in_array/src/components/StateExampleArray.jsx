import { useState } from "react";
import { v4 as uuid } from "uuid";

function StateExampleArray() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  const addFruit = () => {
    setFruits([...fruits, "Banana"]);
  };

  return (
    <>
      <h1>
        <ul>
          {fruits.map((fruit) => {
            return <li key={uuid()}>{fruit}</li>;
          })}
        </ul>
      </h1>
      {/* <button onClick={addFruit}>Add Fruit</button> */}
      <button
        onClick={() => {
          setFruits((prevState) => [...prevState, "newFruit"]);
        }}
      >
        Add Fruit
      </button>
    </>
  );
}

export default StateExampleArray;

// if i don't pass default value to useState(), the value will be then null.
// [] empty is also a value. state: [], if u don't pass anything then it will be null.
