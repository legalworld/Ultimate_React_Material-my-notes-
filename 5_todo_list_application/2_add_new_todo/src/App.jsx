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
    // console.log(newTodo);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  return (
    <div>
      <h1 className="main-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

/*

todo list application er moddhe basically 2ta component
amra imagine korte pari, akta holo form jkhane input tab ar button thakbe.
ar akta holo akta section, jkhane amra sob todo list gula k show korbo...

tai jonoo coder moddhe dekhte pari, 2ta component ache...

*/
