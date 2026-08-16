// Global imports
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Local imports
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "find good waltz in Am", completed: false },
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
      <ToastContainer />
    </div>
  );
}

export default App;

/*


! in this lecture we going to talk about what is "lifting the state up" ?
==>

it may sound a fancy sentence. we did it before though.
let's discuss what this really means ?
==>
from the App component, we called the TodoForm & Todos component.
these two are siblings, they has to work with same state as well.
one has to add something in the todo, one has to remove & show from the todo.
so both of them has the same parent, and because both has to work with the same 
state, i defined the state & the functions which can modify the state in the App component.
why ?
==>
because if i have to pass the data somewhere,
i can easily pass it through props.
that's why we haven't kept the state in the TodoForm or Todos component.
we have kept the state up. we lifted the state up, where ?
the parent component, which is the App component.
so the childs can use the state very easily and do it's work...

* and that's lifting the state up.

the motive for this lecture is that to tell you
what is the meaning of this fancy sentence.
it can be asked in the interview !!! so yeah... 

*/
