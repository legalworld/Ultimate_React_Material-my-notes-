import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "../App";

function Todos() {
  const { todos } = useContext(TodosContext);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default Todos;
