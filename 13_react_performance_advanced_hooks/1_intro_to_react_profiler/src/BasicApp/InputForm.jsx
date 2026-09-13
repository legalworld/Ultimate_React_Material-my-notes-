import React from "react";

function InputForm({ username, setUsername }) {
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
    </form>
  );
}

export default InputForm;
