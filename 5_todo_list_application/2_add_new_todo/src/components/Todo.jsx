import React from "react";

function Todo({ id, title, completed }) {
  return (
    <div
      style={{
        border: "2px solid #242424",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <ul>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Completed: {completed ? "True" : "False"}</li>
      </ul>
    </div>
  );
}

export default Todo;

/*

in this lecture, we gonna learn how to add an item
in a todo list . 

*/
