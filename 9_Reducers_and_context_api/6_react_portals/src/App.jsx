import React from "react";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      <MyComponent />
      <h2>App</h2>
    </>
  );
}

export default App;

/*
you know, if i add any element through react then the element goes
to inside of a div with id root. 

now let's say, inside of index.html, i create another div with id "newRoot".
and i want to render the whole react application inside of this div...
how to do that ???
==>
  for that we use react portals...

*/

/*
inside of App component, we render the MyComponent. and both are inside
of root, if you inspect, you will see...

but i want to render MyComponent inside of newRoot...
to do that we use react portals...

*/
