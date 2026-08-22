import { useReducer, createContext } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todos from "./components/Todos";

// creating context
export const TodosContext = createContext();

function reducer(todos, action) {
  if (action.type === "DELETE") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === "TOGGLE_COMPLETED") {
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
      <TodosContext.Provider
        value={{
          todos: todos,
          dispatch: dispatch,
        }}
      >
        <AddTodoForm />
        <Todos />
      </TodosContext.Provider>
    </>
  );
}

export default App;
