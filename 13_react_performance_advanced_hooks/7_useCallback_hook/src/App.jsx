import { useCallback, useMemo, useState } from "react";
import "./App.css";
import HugeIncrement from "./HugeIncrement";

function App() {
  const [count, setCount] = useState(0);

  // ---------------------------------------
  // const handleCount = () => {
  //   setCount((count) => count + 100);
  // };
  // ---------------------------------------

  // --------------------------------------
  // via useMemo()
  // const handleCount = useMemo(() => {
  //   return () => {
  //     setCount((count) => count + 100);
  //   };
  // }, []);

  // --------------------------------------
  // in useCallback, we don't have to return the function separately...

  const handleCount = useCallback(() => {
    setCount((count) => count + 100);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <HugeIncrement handleCount={handleCount} />
        <p className="read-the-docs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          laborum unde placeat aut error voluptatum laboriosam soluta quos
          voluptatibus veritatis esse corrupti praesentium eveniet voluptates,
          quae explicabo! Atque, ea harum.
        </p>
      </div>
    </>
  );
}

export default App;

/*

the work we do with useCallback() hook, we can do it via useMemo() hook as well...
we don't need to use useCallback()...
only syntax gets easy when we use it, that's why lot's of time 
we use it...

we can use useMemo() for array and objects and functions, any other reference type...
but we can use useCallback() with just functions...




*/

/*

### Primitive values

`number`, `string`, `boolean`, `null`, `undefined`, etc.

* Compared by value.

* `useMemo()` can memoize them, but usually isn't necessary unless the calculation is expensive.

JavaScript

```
const result = useMemo(() => expensiveCalculation(), [count]);
```

### Reference values

Objects, arrays, and functions.

* Compared by reference (identity).

* `useMemo()` can preserve the same reference between renders.

* Useful when passing objects or arrays to `React.memo` components.

JavaScript

```
const user = useMemo(() => ({ name: "Gourab" }), []);
```

Remember: `useMemo()` caches a calculation's result, whether it is a primitive or a reference value.



*/
