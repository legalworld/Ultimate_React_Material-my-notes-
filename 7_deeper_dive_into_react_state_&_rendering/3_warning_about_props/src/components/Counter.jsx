import { useState } from "react";
import ShowCountValue from "./ShowCountValue";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  return (
    <div style={{ marginLeft: "300px" }}>
      <h1>
        Count: <ShowCountValue count={count} />
      </h1>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
}

export default Counter;

/*

props are immutable.
props are objects.

*/
