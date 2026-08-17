import { useState } from "react";

import CleanUpFunctionDemo from "./components/CleanUpFunctionDemo";
import MouseMoveEvent from "./components/MouseMoveEvent";

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
      {/* {showComponent && <CleanUpFunctionDemo />}; */}
      {showComponent && <MouseMoveEvent />};
    </div>
  );
}

export default App;

/*

-in this lecture we going to talk about Events...
-document.addEventListener is also a sideEffect.
-
*/
