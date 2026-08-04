import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prevState) => prevState - 1);
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
          setCount((prevState) => {
            return prevState + 1;
          });
        }}
      >
        InCrease
      </button>
    </div>
  );
}

export default Counter;

// prevState = currentState
// return prevState is going to be your new State .

// now what is the benefit of using this new way of writting using prevState ?
//==> you will get to know about it when we gonna talk about state, in case of arrays & objects.

// how to store arrays & objects inside of state, in that case we use this syntax a lot.
// ! the prevState with arrow function syntax.
