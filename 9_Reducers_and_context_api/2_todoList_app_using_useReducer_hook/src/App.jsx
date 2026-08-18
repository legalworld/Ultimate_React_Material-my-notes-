import { useReducer } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todos from "./components/Todos";

function reducer(todos, action) {
  if (action.type === "DELETE") {
    // ! ----------------------------------
    // * one way to delete.
    // const newState = [];
    // for (let todo of todos) {
    //   if (todo.id !== action.payload.id) {
    //     newState.push(todo);
    //   }
    // }
    // return newState;
    // ! -----------------------------------------------
    // * another way to delete. (e.g.---> high order function like filter.)

    // * implicit return
    return todos.filter((todo) => todo.id !== action.payload.id);
    // * -------------------------------
    // return todos.filter((todo) => {
    //   return todo.id !== action.payload.id;
    // });
  }

  if (action.type === "TOGGLE_COMPLETED") {
    // keep one thing in mind, in delete's case we were filtering the objects...
    // now here i have to use map(), cause i need all the items except one.
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }

  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }

  return todos;
  // throw new Error("Invalid Action Type");

  // * later, in real world projects, we will discuss, what should we keep here ???
  // * return todos or throw new Error("Invalid Action Type");
}

const initialTodos = [
  { id: 1, title: "teach students", completed: false },
  { id: 2, title: "edit videos", completed: false },
  { id: 3, title: "play guitar", completed: false },
  { id: 4, title: "study computer science", completed: false },
  { id: 5, title: "go to market", completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <AddTodoForm dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;

/*
we call the dispatch function, and the dispatch function calls the reducer function...

* reducer function has a rule that either it throw you an error or it gonna return you new state.
*/

// filter method returns you an new array. Callback must give a truthy/falsy result.
