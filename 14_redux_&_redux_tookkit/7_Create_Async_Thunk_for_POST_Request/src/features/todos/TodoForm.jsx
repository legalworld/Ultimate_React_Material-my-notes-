import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
