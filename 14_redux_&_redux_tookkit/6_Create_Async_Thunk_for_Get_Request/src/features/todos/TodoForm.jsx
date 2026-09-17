import React, { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
