import AddTodoForm from "./components/AddTodoForm";
import Todos from "./components/Todos";
import TodosProvider from "./contexts/TodosProvider";

function App() {
  return (
    <>
      <TodosProvider>
        <AddTodoForm />
        <Todos />
      </TodosProvider>
    </>
  );
}

export default App;
