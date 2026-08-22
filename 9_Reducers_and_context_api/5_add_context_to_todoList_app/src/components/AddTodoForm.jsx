import { useState, useContext } from "react";
import { TodosContext } from "../App";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch } = useContext(TodosContext);
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
    dispatch({
      type: "ADD_TODO",
      payload: { newTodo: newTodo },
    });
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
