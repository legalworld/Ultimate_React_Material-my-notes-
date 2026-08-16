import React from "react";

function Todo({ id, title, completed, toggleCompleted }) {
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
    </div>
  );
}

export default Todo;

/*

after writting the checkBox input tab, you can see
we can toggle it, but i want that if we click the no toggle should happen,
one kind of controlled input we want to make this...

so we used this---> checked={completed}

whether any item is completed or not, it will determine on
the value of completed of that particular item at that particular time of iteration...

after that you can see, we can't check or uncheck the checkBox, cause we are controlling the checkBox.

but now after all of that, i want when i toggle on the boxes the value of them should change in the todos state. 

for that we have to make function in App.jsx,
and pass it through props.




*/
