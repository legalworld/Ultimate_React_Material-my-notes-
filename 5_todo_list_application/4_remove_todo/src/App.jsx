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
    // ! ########################################
    // * with loops (non-standard way), equivalent to the filter method way.(or underhood mechanism)
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id !== id) {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);
    // ! ########################################
    // * long form of filter method way
    // setTodos((prevState) => {
    //   return prevState.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // });
    // * standard(concise way) with implicit returns ...
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
    <div>
      <h1 className="main-title">TodoList</h1>
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

// filter method returns a filtered array.
