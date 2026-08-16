import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
}

export default Counter;
