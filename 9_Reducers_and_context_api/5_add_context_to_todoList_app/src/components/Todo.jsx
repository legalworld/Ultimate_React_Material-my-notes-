import { useTodos } from "../contexts/TodosProvider";

function Todo({ id, title, completed }) {
  const { dispatch } = useTodos();

  function handleDelete() {
    console.log("handle delete called");
    dispatch({
      type: "DELETE",
      payload: { id: id },
    });
  }

  function handleToggle() {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: { id: id },
    });
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#cecece",
        borderRadius: "1rem",
      }}
    >
      <h4>id: {id}</h4>
      <h4
        style={{
          textDecoration: completed ? "line-through" : "solid",
        }}
      >
        title: {title}
      </h4>
      <h4>completed: {completed ? "True" : "False"}</h4>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle Completed</button>
    </div>
  );
}

export default Todo;
