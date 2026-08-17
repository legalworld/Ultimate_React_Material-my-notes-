import { useState } from "react";

import UserForm from "./components/UserForm";
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
      {showComponent && <UserForm />};
    </div>
  );
}

export default App;
