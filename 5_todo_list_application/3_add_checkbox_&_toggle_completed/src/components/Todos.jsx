import React from "react";
import Todo from "./Todo";

function Todos({ todos, toggleCompleted }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo {...todo} key={todo.id} toggleCompleted={toggleCompleted} />
        );
      })}
    </div>
  );
}

export default Todos;
