import React from "react";

function Todo({ id, title, completed }) {
  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Status: {completed ? "completed" : "not completed"}</li>
      </ul>
    </div>
  );
}

export default Todo;
