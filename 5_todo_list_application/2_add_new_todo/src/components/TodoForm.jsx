import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("please fill input");
      return;
    }

    // my todo is in form of object. it has id, title, completed keys.
    // so first i have to make todo in that form...
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };

    addTodo(newTodo);

    // empty the input field again.
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;

/*

title state ta add korte hobe todo state a .
ar todo state ache App.jsx file a .
tahole amake newTodo add korar function App.jsx a banai te hobe...

state jei khane, sei state k manipulate korar function o seikhane...

karon amake todoform theke data ta todolist a add korte hobe, ar list ta ache App.jsx er moddhe.

*/
