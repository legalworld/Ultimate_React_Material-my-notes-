import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    // setCount(count + 1);
    // ------------------------------------
    // setCount((prevCount) => {
    //   console.log("setting state 1");
    //   return prevCount + 1;
    // });
    // setCount((prevCount) => {
    //   console.log("setting state 2");
    //   return prevCount + 1;
    // });
    // setCount((prevCount) => {
    //   console.log("setting state 3");
    //   return prevCount + 1;
    // });
    // ---------------------------------

    setCount((prevCount) => {
      return prevCount + 3;
    });

    // ----------------------------------------

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
  }
  return (
    <div style={{ marginLeft: "300px" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
}

export default Counter;

/*
async state update...
about the state we know till now is async.
in react, state is async. 
*/

/*

  const [count, setCount] = useState(0);
  function handleIncrease() {
    console.log("function called");-----> (line-1)
    setCount(count + 1);-----> (line-2)
    console.log(count);-----> (line-3)
  }

at first, when you execute the function, the count
value will be 0, then again 1, then 2 .

but you might think, that it should print 1 first by looking at the code.
but that's not gonna happen, cause--->

at first (line-1) will execute. 
then the (line-2)'s code is asynchronous. here react is telling that
i'm gonna update the state and then i'm gonna update the UI in future.
React doesn't do state update instantly, it updates it in future.
then react will say, execute the below code.
that's why count's value 0 printed not 1.
so when, on the UI, you will see 2, in the console 
it will print 1. the UI value always be ahead by one.

for updating the state, react batch stuff...means it not updates instantly...

but if you want to print the same value on the console as UI, then you have 
to do something different... --->

function handleIncrease() {
    const nextcount = count + 1;
    setCount(nextcount);
    console.log(nextcount);
  }

that's it. pretty straight forward code...  

----------

when i click the increase button, react kind of takes
snapshot(like photo click)...
in the snapshot, it will see--->
 the current count: 0
 and i have to increase it by one(1).

so when react going to update the state, react 
will store these infos inside of it.

const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1); (line-1) 
    setCount(count + 1); (line-2)
    setCount(count + 1); (line-3)
  }

---> here, each line's count will be zero.
see, it's common sense. each line is async.
each will say go to the next one i will update in the future.

each line is saying --->
 0
 ↓
 set to 1
 set to 1
 set to 1
 ↓
 1

so it does it. 
When handleIncrease() runs, all three lines 
are executed during the same render/event, 
so each one sees the same count:
  setCount(0 + 1); // set to 1
  setCount(0 + 1); // set to 1
  setCount(0 + 1); // set to 1

So the final result is:
  count = 1


If you want `+3`

Use the **functional updater**:

```js
function handleIncrease() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```

Now React processes them sequentially:

```text
prevCount = 0 → 1
prevCount = 1 → 2
prevCount = 2 → 3
```

So:

```text
0 → 3
```

### The key rule to remember

When your new state depends on the **previous state**, prefer:

```js
setState(prev =>  *calculate new state from prev* );
```

rather than:

```js
setState(state + ...);
```

This becomes especially important when you make **multiple state updates in the same event handler**.
  
*/
