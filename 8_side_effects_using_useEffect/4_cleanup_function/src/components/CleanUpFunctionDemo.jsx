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

/*

empty dependency array means, at initial mount the useEffect callback going to be called...

*/

/*

useEffect() er callback theke amra return kori akta function.
ar atai holo cleanup function...

* scenarios when the clean up function is being called...
*-->(1) when the component will unmount...(unmount means the component will disappear from screen...)
* first the clean-up function runs, then the component get unmount. that's why after unticking the cleanup function runs and then the component disappears...

* (2)--> when there is some value inside of that dependency array...
* then component will re-render, then my cleanup function will run...then my useEffect will run...

*/
