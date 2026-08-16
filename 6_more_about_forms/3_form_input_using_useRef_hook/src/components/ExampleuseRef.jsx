import { useState, useRef } from "react";

// !----------------------------------------------------------
// * useState
// function ExampleuseRef() {
//   console.log("render");
//   const [counter, setCounter] = useState(0);
//   return (
//     <div style={{ marginLeft: "300px" }}>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Increase Button</button>
//     </div>
//   );
// }

// export default ExampleuseRef;
// !----------------------------------------------------------

// !----------------------------------------------------------
// * useRef
// * in the case of the useRef, the component not re-render.
// function ExampleuseRef() {
// console.log("render");
// const username = useRef("Gourab");
// console.log(username);
//   function handleClick() {
//     username.current = "Elon";
//     console.log(username);
//   }
//   return (
//     <div>
//       <h1>userName: {username.current}</h1>
//       <button onClick={handleClick}>Change Name</button>
//     </div>
//   );
// }

// export default ExampleuseRef;
// !----------------------------------------------------------

// !----------------------------------------------------------
// * useRef
function ExampleuseRef() {
  const h1Ref = useRef();
  return (
    <div>
      <h1 ref={h1Ref}>Hello There</h1>
      <button
        onClick={() => {
          // console.log(h1Ref);
          const h1Element = h1Ref.current;
          // console.log(h1Element);
          h1Element.textContent = "hi, what's up?";
          h1Element.style.color = "green";
        }}
      >
        Change Content
      </button>
    </div>
  );
}

export default ExampleuseRef;
// !----------------------------------------------------------

/*

don't start your component's name with use.
cause we gonna write them when we gonna build our own custom hook...

there are multiple useCases of useRef...
in this lecture we gonna talk about---> 
-what is useRef hook ?
-example of useRef
-difference between useRef & useState 
-handle form inputs using useRef 

there are many things related to useRef hook, but for today's lecture
they will be outOfScope. we gonna learn them later, with useEffect, cause they help resolving
errors with useEffect...

from infinite loop, we can get rid of using useRef hook...

Hooks are basically nothing but functions in disguise .

*/

/*

you can see the counter application code above.
every time i increase the counter, the whole component renders.
causing multiple renders when you are changing the state...


useState returns an array. inside of that array, there are two things
one is the state & another one is a function to update that state.

useRef returns an object with only one property current.
like--->{
            current: state
        }

no matter, how many time you change the value,
in the case of useRef, there is no re-render gonna happen...
now this behavior has lots of usecase. and we gonna use them also.


you can store anything inside of useRef like useState.
and, additionally you can store html element's reference.






*/

/*

we gonna store the h1 element's ref variable inside of useRef.
see the code for the process to do this...
now i can access the h1 element, using the h1Ref variable.

h1 is the complete dom node reference, if you want you can log h1Ref in the console...
means we can do anything with h1. e.g.---> text content change, change color etc.

so basically in h1Ref, we can store dom node reference.
and our component is also not re-rendered.... 
*/
