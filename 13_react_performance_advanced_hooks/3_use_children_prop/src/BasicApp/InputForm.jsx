import { useState } from "react";
import ExtraComponent from "./ExtraComponent";

function InputForm({ children }) {
  const [username, setUsername] = useState("");
  console.log("InputForm rendered");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        autoComplete="off"
      />
      {children}
      {/* <ExtraComponent /> */}
      <button onClick={() => setUsername("")}>Clear Input</button>
    </form>
  );
}

export default InputForm;
