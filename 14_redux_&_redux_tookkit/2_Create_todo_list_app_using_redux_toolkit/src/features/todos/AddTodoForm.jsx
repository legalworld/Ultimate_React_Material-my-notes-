import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo, removeTodo, toggleCompleted } from "./todosSlice";

function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: title,
      completed: false, // by default it's value is false...
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
