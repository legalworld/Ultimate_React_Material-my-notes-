// cleanup function...

import { useState } from "react";

import CleanUpFunctionDemo from "./components/CleanUpFunctionDemo";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App" style={{ marginLeft: "300px" }}>
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <CleanUpFunctionDemo />};
    </div>
  );
}

export default App;

/*
-we use cleanup function in useEffect() hook.
-useEffect() is all about sideEffect.
-any work that is not related with react, is sideEffect. 
e.g.--> fetching data is not related to react, so we can call it sideEffect...
*/

/*

what is this called ???---> {showComponent && <CleanUpFunctionDemo />};

That's called **conditional rendering** in React.

Specifically, this pattern:

```jsx
{showComponent && <CleanUpFunctionDemo />}
```

is called **conditional rendering using the logical AND (`&&`) operator**.

It means:

* If `showComponent` is `true` → render `<CleanUpFunctionDemo />`
* If `showComponent` is `false` → render nothing

Example:

```jsx
{true && <Component />}   // Component renders
{false && <Component />}  // Nothing renders
```

The `&&` here is the **JavaScript logical AND operator**, which React commonly uses for conditional rendering.


*/
