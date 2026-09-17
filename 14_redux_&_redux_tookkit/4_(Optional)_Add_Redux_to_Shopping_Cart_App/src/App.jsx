// ! global imports
import { ToastContainer } from "react-toastify";

// ! local imports
import Products from "./components/Products";
import { store } from "./store/store";
import Header from "./components/Header";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          newestOnTop={true}
          autoClose={600} /* 600 mili-second */
          hideProgressBar={true}
        />
        <Header />
        <Products />
      </Provider>
    </>
  );
}

export default App;
