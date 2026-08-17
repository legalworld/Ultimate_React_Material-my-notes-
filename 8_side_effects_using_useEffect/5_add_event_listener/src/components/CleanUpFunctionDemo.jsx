import { useEffect, useState } from "react";

function CleanUpFunctionDemo() {
  console.log("component rendered...");

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("effect callback");

    return () => {
      console.log("cleanup function");
    };
  }, [counter]);
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            setCounter((prevState) => prevState + 1);
          }}
        >
          Increase
        </button>
      </div>
    </>
  );
}

export default CleanUpFunctionDemo;
