// useEffect hook

import { useEffect, useState } from "react";

function ExampleUseEffet() {
  console.log("component rendered");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log("Inside UseEffect");
  // });

  // useEffect(() => {
  //   console.log("Inside UseEffect");
  // }, []);

  useEffect(() => {
    console.log("Inside UseEffect");
  }, [counter1]);

  return (
    <div style={{ marginLeft: "300px" }}>
      {" "}
      <h1>Counter1: {counter1}</h1>
      <button
        onClick={() => {
          setCounter1((prevValue) => prevValue + 1);
        }}
      >
        Increase
      </button>
      <h1>Counter2: {counter2}</h1>
      <button
        onClick={() => {
          setCounter2((prevValue) => prevValue + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default ExampleUseEffet;

/*

if we want to do anything sideEffect, means
let's say we are doing something that is not directly related 
with my react component then we have to do that thing with useEffect().

e.g.-->
(1) fetch data from api.
(2) adding eventListener to an element.

* Read the note.md--> Q-1

before react 16, we have class based components.(we will talk about it later)
in class based components we have react life cycle methods.(like--> componentDidMount)
and they do the eqivalent work of useEffect but in class-based component...

Yes, **exactly right.** ✅

In class components, you use **lifecycle methods** for side effects:

```text
Class Components          Functional Components
─────────────────         ─────────────────────
componentDidMount    →    useEffect(..., [])
componentDidUpdate    →    useEffect(..., [dependencies])
componentWillUnmount  →    useEffect cleanup
```

So, **`useEffect` provides the functional-component way of handling many things that lifecycle methods handled in class components.**


---

- useEffect as a input takes callback function...
- the callback function of useEffect, it will get called everytime after my component gets render...
- now component get's render whenever my state changes... 


! useEffect() hook takes two inputs as arguments.
! 1) the callBack function.
! 2) a Dependency Array. 

with empty dependency array.
---
*  useEffect(() => {
*    console.log("Inside UseEffect");
*  }, []);
---
with an empty dependency array the useEffect callback function get's called
only once, when the component get's render for the first time.

---

with non-empty dependency array...
---
*  useEffect(() => {
*    console.log("Inside UseEffect");
*  },[counter]);
---
it means whenever my counter gets change, my useEffect()
going to be called...

*/
