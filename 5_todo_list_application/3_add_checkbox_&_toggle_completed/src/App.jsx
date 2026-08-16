// Global imports
import { useState } from "react";

// Local imports
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "find good watlz in Am", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const toggleCompleted = (id) => {
    // console.log(id, "toggle completed");
    // ! ###########################################
    // * btw, this is not a standard way of doing this stuff.
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed });
    //   } else {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);
    // ! ###################################################

    // * now that's the equivalent & standard way ...
    // * you can use implicit returns here as well .
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <div>
      <h1 className="main-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
