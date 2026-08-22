import { createContext, useReducer, useContext } from "react";

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

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  function handleDelete(id) {
    console.log("handle delete called");
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  }

  const addNewTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO",
      payload: { newTodo: newTodo },
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        dispatch: dispatch,
        handleDelete,
        addNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodosProvider;

/*
we gonna keep all the state inside of TodoProvider...
we gonna keep our reducer and initial function in this file also...

*/

// ! don't forget to check commit history...(so you can find the same app but without Provider component design pattern...)

/*
now you guys might be wondering that why i put everything here in this file ???
==>
  see, after doing that all the application state come to one place...(here, in this file)


*/
