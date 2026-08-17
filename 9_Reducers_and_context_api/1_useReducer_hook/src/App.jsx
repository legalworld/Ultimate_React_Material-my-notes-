import { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 0 });
  const handleIncrease = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  const handleReset = () => {
    setState((prevState) => ({ ...prevState, count: 0 }));
  };

  const handleDecrease = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count - 1 }));
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Application</h2>
      <h2>{state.count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;

/*

-we use useReducer() hook to manage complex state.
-study the useReducer() with total focus, cause in the 
coming time we gonna study Redux, and it's 99% similar to useReducer() hook.

-if you know useReducer well, then you can learn Redux very easily...
because they both follow same design pattern... so if you know useReducer(), then just 
imagine you also know Redux...

- we learnt that we can manage state using useState() also...

* now the question arises is, can't we do all the work with useState() ?
* is useReducer() necessary ?
* ==> we can do all the state work using useState(), but sometimes
* our state logic becomes very complex... and when we manage it with useState(), it becomes more complex...
* that's why to manage our complex state, we use useReducer() hook.
* because useReducer() makes our work easy to manage complex state...


* now how we gonna learn about useReducer() ?
* ==> at first we gonna manage simple state with useReducer hook,
* then we gonna manage complex state with useReducer() hook.
* because that way it's going to be easy to learn and implement 
* useReducer() hook.


- we know that when we use useState(), it returns us an array.
and in that array in the first position we have a state variable and in the second position we have
a function to update that state...


*/
