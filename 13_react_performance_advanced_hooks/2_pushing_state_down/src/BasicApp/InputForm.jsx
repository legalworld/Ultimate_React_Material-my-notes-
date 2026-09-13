import { useState } from "react";
function InputForm() {
  const [username, setUsername] = useState("");
  console.log("InputForm rendered");
  return (
    <form>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        autoComplete="off"
      />
      <button onClick={() => setUsername("")}>Clear Input</button>
    </form>
  );
}

export default InputForm;
