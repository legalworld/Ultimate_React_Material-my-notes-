import { useState, useMemo } from "react";
import DisplayFruits from "./DisplayFruits";

function Example2UseMemo() {
  const [username, setUsername] = useState("");

  const fruits = useMemo(() => {
    return [
      { fruitName: "apple", emoji: "🍎" },
      { fruitName: "grapes", emoji: "🍇" },
      { fruitName: "mango", emoji: "🥭" },
    ];
  }, []);

  // ---------------------------------------------------
  // const fruits = [
  //   { fruitName: "apple", emoji: "🍎" },
  //   { fruitName: "grapes", emoji: "🍇" },
  //   { fruitName: "mango", emoji: "🥭" },
  // ];
  // ---------------------------------------------------
  return (
    <div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <DisplayFruits fruits={fruits} />
    </div>
  );
}

export default Example2UseMemo;

/*

! why we are not using any dependency here ?
==>
Because the `fruits` array does not depend on any changing value inside the component.

```jsx
const fruits = useMemo(() => {
  return [...];
}, []);
```

An empty dependency array means: calculate this value once and reuse the same array reference on later renders. This is useful because typing in the username input re-renders `Example2UseMemo`, but `DisplayFruits` receives the same `fruits` reference.

If the calculation depended on a value, that value would go in the dependency array:

```jsx
const filteredFruits = useMemo(() => {
  return fruits.filter((fruit) => fruit.fruitName.includes(searchTerm));
}, [searchTerm]);
```

Here, it recalculates whenever `searchTerm` changes.



*/
