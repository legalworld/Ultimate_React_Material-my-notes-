import { useReducer } from "react";

function reducer(state, action) {
  // console.log("inside reducer");
  // console.log(state, action);

  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return state;

  // throw new Error("Invalid Action Type");
}

const initialState = { count: 0, firstName: "Gourab" };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT", // you can write anything here, but write in UpperCase something meaningfull.
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
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
      <h2>Hello {initialState.firstName}</h2>
      <h2>{state.count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;

/*

usereducer hook returns an array, which going to has
a length of 2.
--->at first index it will give us a state.
--->and at second index it will give us a function to update that state.
same as useState()...

* setState or dispatch same thing. it's just a naming convension when we are working
* with useReducer()...

* useReducer() returns this---> [state, dispatch]
* useReducer() as an argument takes---> Two things.
* 1) reducer function...
* 2) initial state...

! make a function with reducer name outside of the App() component...

* usually we keep complex state inside of objects...

! in the dispatch function we pass an object as an argument...
! and we call this object as an action...we have to perform action...
! now in this action object we have to tell, what things to do when someone clicks on handleIncrease or handleReset or handleDecrease...
! we have to tell type in the action object...

* so we have action type & action object...

* when i click on any button, then dispatch function going to be called.
* now this dispatch function going to call the reducer function, that we have made above...

* in the reducer function, as a parameter we can accept two things...
* state & action_object...
* 
* now the reducer function will check, what action to perform ?
* ==> if we click on increase, then the increment action obj will go to the reducer action parameter... 
* 
* state in the reducer parameter type and state in the useReducer() returned array has the same reference...
* 
* reducer function always returns new state.
* 
*/

// for revise debug the flow of this code.
// like what runs after what ? ...
