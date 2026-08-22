import React from "react";
import Todo from "./Todo";
import { useTodos } from "../contexts/TodosProvider";
function Todos() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default Todos;
