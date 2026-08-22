import { useState } from "react";
import { useTodos } from "../contexts/TodosProvider";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const { addNewTodo } = useTodos();
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("type something");
      return;
    }
    const newTodo = {
      title: title,
      completed: false,
      id: crypto.randomUUID(),
    };
    addNewTodo(newTodo);
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
      <button type="submit">Add todo</button>
    </form>
  );
}

export default AddTodoForm;
