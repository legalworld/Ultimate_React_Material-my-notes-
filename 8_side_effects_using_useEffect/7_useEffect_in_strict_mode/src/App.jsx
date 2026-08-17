import { useState } from "react";

import FetchDataExample from "./components/FetchDataExample";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App">
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <FetchDataExample />};
    </div>
  );
}

export default App;
