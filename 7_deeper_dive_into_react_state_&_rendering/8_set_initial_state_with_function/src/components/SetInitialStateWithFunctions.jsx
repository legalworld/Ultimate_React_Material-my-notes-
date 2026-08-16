import { useState } from "react";

function generateArray() {
  console.log("Generate array with random nums");
  const randomNums = [];
  for (let i = 0; i < 10; i++) {
    randomNums.push(Math.random() * 100);
  }
  return randomNums;
}

function SetInitialStateWithFunctions() {
  const [nums, setNums] = useState(generateArray);
  return (
    <>
      <ul>
        {nums.map((num) => {
          return <li>{num}</li>;
        })}
      </ul>

      <button
        onClick={() => {
          setNums((prevNums) => [...prevNums, Math.random() * 100]);
        }}
      >
        Add Random Number
      </button>
    </>
  );
}

export default SetInitialStateWithFunctions;

/*

also you can directly write the function inside of the useState with callback syntax

*/
