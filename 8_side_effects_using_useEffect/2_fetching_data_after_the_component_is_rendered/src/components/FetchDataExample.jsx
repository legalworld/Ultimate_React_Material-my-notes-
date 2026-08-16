import { useState, useEffect } from "react";

// ! -----------------------------------------------------------------------------
// function FetchDataExample() {
//   console.log("render fetch data");

//   const [state, setState] = useState(1);

// in initial render the useEffect will run, and
// if we are putting the state inside of the dependency array then after each state change the useEffect() hook will run...
//   useEffect(() => {
//     console.log("inside useEffect");
//   }, [state]);

//   return (
//     <div style={{ marginLeft: "300px" }}>
//       <h1>{state}</h1>
//       <button
//         onClick={() => {
//           setState((prevState) => prevState + 1);
//         }}
//       >
//         Increase
//       </button>
//     </div>
//   );
// }

// export default FetchDataExample;

// ! ---------------------------------------------------------

const URL = `https://jsonplaceholder.typicode.com/users`;

function FetchDataExample() {
  console.log("component rendered");

  useEffect(() => {
    // * promise way...
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default FetchDataExample;

/* 

we are using the useEffect() with empty dependency array, cause we want 
to fetch the data only once, in the time of after initial component rendering.

to hit the url, there are two ways.
* one is using the promise.
* another one is using async await...

return response.json(); --> response is a string, so we have to convert it into a javascript object and then return.
and that's what the line is doing..

*/
