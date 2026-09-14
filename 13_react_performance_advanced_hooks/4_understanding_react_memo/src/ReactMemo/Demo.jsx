import { useState } from "react";
import Card from "./Card";
// import Extra from "./Extra";

function Demo({ children }) {
  console.log("Demo rendered");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  return (
    <div style={{ background: "#efefef", padding: "1rem" }}>
      <label htmlFor="">State 1</label>
      <input
        type="checkbox"
        name="state1"
        id="state1"
        checked={state1}
        onChange={() => setState1(!state1)}
      />
      <label htmlFor="">State 2</label>
      <input
        type="checkbox"
        name="state2"
        id="state2"
        checked={state2}
        onChange={() => setState2(!state2)}
      />
      <Card state1={state1} />
      {/* <Extra /> */}
      {children}
    </div>
  );
}

export default Demo;

/*
now after having this Extra Component, whenever the state changes the Component will render...
now how to stop rendering the extra component ?
-->
we have two ways to stop it. one is to use the memo function.
and another one is to use the children prop...


*/
