import { useEffect } from "react";
import { fetchTodos } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function TodoList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { data: todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    // after adding unwrap, you can treat it as a normal promise...
    dispatch(fetchTodos())
      .unwrap()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
}

export default TodoList;
