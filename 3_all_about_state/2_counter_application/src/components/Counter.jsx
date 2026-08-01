import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        DeCrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        ReSet
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        InCrease
      </button>
    </div>
  );
}

export default Counter;
