import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
function App() {
  const { count, username } = useSelector((state) => {
    // console.log(state);
    return state.counter;
  });
  // console.log(count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hello, {username}</h1>
      <h2>count : {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;

// with useSelector(), you can select any state, and can use it...
// useSelector() as a input takes callBack function...this callback function will take
// the whole apps state as a input in the parameters...

// we are basically calling the dispatch function, but in redux's terminology we are telling to do action dispatch...
// for doing action dispatch, we have to do the following...
// you have to import useDispatch() from "react-redux"
// useDispatch() will provide me a function, and by calling it we can provide our actions...
