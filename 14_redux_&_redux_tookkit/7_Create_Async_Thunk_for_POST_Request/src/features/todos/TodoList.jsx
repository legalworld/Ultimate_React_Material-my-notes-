import { useEffect } from "react";
import { fetchTodos } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
function TodoList() {
  const { data: todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
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
