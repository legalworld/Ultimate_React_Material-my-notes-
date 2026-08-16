import React from "react";

function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div
      style={{
        border: "2px solid #242424",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <p>Id: {id}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <p>Title: {title}</p>
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Todo;
