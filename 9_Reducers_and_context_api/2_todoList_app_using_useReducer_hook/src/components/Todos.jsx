import React from "react";
import Todo from "./Todo";
function Todos({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default Todos;

/*

-when you pass something through props to components, that's called props drilling...
-and to get rid of prop drilling, we use useContext() hook.
*/
