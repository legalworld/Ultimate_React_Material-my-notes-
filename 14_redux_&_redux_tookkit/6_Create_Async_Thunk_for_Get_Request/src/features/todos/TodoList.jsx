import { useEffect } from "react";
import { fetchTodos } from "./todosSlice";
import { useDispatch } from "react-redux";
function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return <div>TodoList</div>;
}

export default TodoList;
