import React from "react";
import { useContext } from "react";
import { MyAppContext } from "../App";

function GrandChild() {
  const returnedValueFromContext = useContext(MyAppContext);
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#FFD9B7",
      }}
    >
      <h3>Grandchild</h3>
      <button onClick={returnedValueFromContext.someFunction}>
        Call My func
      </button>
    </div>
  );
}

export default GrandChild;
