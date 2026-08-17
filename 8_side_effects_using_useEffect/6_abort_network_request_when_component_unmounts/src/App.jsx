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

/*

here when you tick and then untick instantly, the network request still 
happening... i don't want that ...
usually when we tick it the component renders, here we are fetching data from api.
but if someone click and then instantly unclick it we don't want to send any req .
how to do that ???
==> with a cleanUp function in the useEffect, off course... 
we have to abort the request... see the code for the process... 

*/
