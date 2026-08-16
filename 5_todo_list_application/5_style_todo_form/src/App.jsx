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

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
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
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
