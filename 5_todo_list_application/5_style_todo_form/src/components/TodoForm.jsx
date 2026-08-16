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

    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };

    addTodo(newTodo);

    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

/*

we can write css for different components in different
css file.

but right now, i'm gonna write css in only one file, cause
we will make our hands dirty with this todo app multiple times.
and for ease of navigation.

*/
